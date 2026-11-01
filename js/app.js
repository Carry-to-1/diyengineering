/**
 * DIY Engineering - Main Application Script
 * Clean, modular vanilla JavaScript.
 * Manages 3-column navigation, state, search, dark mode, bookmarks, and hash routing.
 */

(function () {
  'use strict';

  // Application State
  const state = {
    currentDisciplineId: 'welcome',
    currentCourseId: null,
    searchQuery: '',
    disciplineFilterQuery: '',
    institutionFilter: 'all',
    theme: 'light',
    bookmarks: new Set(),
    completed: new Set()
  };

  // Local Storage Keys
  const STORAGE_KEYS = {
    THEME: 'diy_eng_theme',
    BOOKMARKS: 'diy_eng_bookmarks',
    COMPLETED: 'diy_eng_completed'
  };

  // DOM Elements Cache
  const elements = {
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeToggleText: document.getElementById('theme-toggle-text'),
    globalSearchInput: document.getElementById('global-search-input'),
    institutionSelect: document.getElementById('institution-select'),
    savedCoursesBtn: document.getElementById('saved-courses-btn'),
    savedCountBadge: document.getElementById('saved-count-badge'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    primaryNavContainer: document.getElementById('primary-nav-list'),
    submenuContainer: document.getElementById('submenu-container'),
    submenuHeading: document.getElementById('submenu-heading'),
    submenuCount: document.getElementById('submenu-count'),
    submenuFilterInput: document.getElementById('submenu-filter-input'),
    mainContentContainer: document.getElementById('main-content-container'),
    savedModal: document.getElementById('saved-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    modalSavedList: document.getElementById('modal-saved-list'),
    colPrimaryNav: document.querySelector('.col-primary-nav'),
    colSubmenuNav: document.querySelector('.col-submenu-nav')
  };

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function init() {
    loadPreferences();
    setupEventListeners();
    populateInstitutionFilter();
    renderPrimaryNav();
    handleHashRouting();

    // Check if initial hash is present, otherwise default to welcome
    if (!window.location.hash) {
      navigateToDiscipline('welcome');
    }
  }

  // Load User Preferences from LocalStorage
  function loadPreferences() {
    // Theme
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) {
      state.theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      state.theme = 'dark';
    } else {
      state.theme = 'light';
    }
    applyTheme(state.theme);

    // Bookmarks & Completed
    try {
      const savedBookmarks = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '[]');
      state.bookmarks = new Set(savedBookmarks);

      const savedCompleted = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED) || '[]');
      state.completed = new Set(savedCompleted);
    } catch (e) {
      state.bookmarks = new Set();
      state.completed = new Set();
    }
    updateSavedCountUI();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (elements.themeToggleText) {
      elements.themeToggleText.textContent = theme === 'dark' ? 'Light' : 'Dark';
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(state.theme);
  }

  function updateSavedCountUI() {
    if (elements.savedCountBadge) {
      elements.savedCountBadge.textContent = state.bookmarks.size;
    }
  }

  // ==========================================================================
  // Event Listeners
  // ==========================================================================

  function setupEventListeners() {
    // Theme toggle
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Institution filter
    if (elements.institutionSelect) {
      elements.institutionSelect.addEventListener('change', (e) => {
        state.institutionFilter = e.target.value;
        if (state.searchQuery) {
          renderSearchResults();
        } else {
          renderSubmenu();
          if (state.currentDisciplineId === 'welcome') {
            renderWelcomeView();
          }
        }
      });
    }

    // Global Search
    if (elements.globalSearchInput) {
      elements.globalSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        if (state.searchQuery.length > 0) {
          renderSearchResults();
        } else {
          if (state.currentCourseId) {
            renderCourseDetail(state.currentCourseId);
          } else if (state.currentDisciplineId === 'welcome') {
            renderWelcomeView();
          } else {
            renderDisciplineOverview(state.currentDisciplineId);
          }
        }
      });
    }

    // Keyboard shortcut: '/' to focus search, 'Escape' to clear
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== elements.globalSearchInput && document.activeElement !== elements.submenuFilterInput) {
        e.preventDefault();
        elements.globalSearchInput.focus();
        elements.globalSearchInput.select();
      } else if (e.key === 'Escape') {
        if (elements.savedModal && elements.savedModal.classList.contains('open')) {
          closeSavedModal();
        } else if (state.searchQuery) {
          state.searchQuery = '';
          elements.globalSearchInput.value = '';
          if (state.currentCourseId) {
            renderCourseDetail(state.currentCourseId);
          } else {
            navigateToDiscipline(state.currentDisciplineId);
          }
        }
      }
    });

    // Submenu filter within active discipline
    if (elements.submenuFilterInput) {
      elements.submenuFilterInput.addEventListener('input', (e) => {
        state.disciplineFilterQuery = e.target.value.toLowerCase().trim();
        renderSubmenu();
      });
    }

    // Modal open/close
    if (elements.savedCoursesBtn) {
      elements.savedCoursesBtn.addEventListener('click', openSavedModal);
    }
    if (elements.closeModalBtn) {
      elements.closeModalBtn.addEventListener('click', closeSavedModal);
    }
    if (elements.savedModal) {
      elements.savedModal.addEventListener('click', (e) => {
        if (e.target === elements.savedModal) closeSavedModal();
      });
    }

    // Mobile menu toggle
    if (elements.mobileMenuBtn) {
      elements.mobileMenuBtn.addEventListener('click', () => {
        elements.colPrimaryNav.classList.toggle('open');
      });
    }

    // Hash change routing
    window.addEventListener('hashchange', handleHashRouting);
  }

  function populateInstitutionFilter() {
    if (!elements.institutionSelect) return;
    const institutions = CatalogService.getAllInstitutions();
    elements.institutionSelect.innerHTML = institutions
      .map(inst => `<option value="${inst.id}">${inst.name}</option>`)
      .join('');
  }

  // ==========================================================================
  // Routing & Navigation
  // ==========================================================================

  function handleHashRouting() {
    const hash = window.location.hash.replace('#', '').trim();
    if (!hash || hash === 'welcome') {
      navigateToDiscipline('welcome', false);
      return;
    }

    // Check if hash matches a course directly: e.g. #cmu-15-213 or #cse/cmu-15-213
    const parts = hash.split('/');
    let targetCourseId = null;
    let targetDisciplineId = null;

    if (parts.length === 2) {
      targetDisciplineId = parts[0];
      targetCourseId = parts[1];
    } else if (parts.length === 1) {
      // Check if it's a discipline
      const disc = CatalogService.getDisciplineById(parts[0]);
      if (disc) {
        targetDisciplineId = disc.id;
      } else {
        // Check if it's a course id
        const course = CatalogService.getCourseById(parts[0]);
        if (course) {
          targetCourseId = course.id;
          targetDisciplineId = course.discipline;
        }
      }
    }

    if (targetDisciplineId) {
      state.currentDisciplineId = targetDisciplineId;
      renderPrimaryNav();
      renderSubmenu();

      if (targetCourseId) {
        navigateToCourse(targetCourseId, false);
      } else {
        state.currentCourseId = null;
        if (targetDisciplineId === 'welcome') {
          renderWelcomeView();
        } else {
          renderDisciplineOverview(targetDisciplineId);
        }
      }
    } else {
      navigateToDiscipline('welcome', false);
    }
  }

  function updateUrlHash(disciplineId, courseId = null) {
    if (courseId) {
      window.location.hash = `#${disciplineId}/${courseId}`;
    } else {
      window.location.hash = `#${disciplineId}`;
    }
  }

  function navigateToDiscipline(disciplineId, updateHash = true) {
    state.currentDisciplineId = disciplineId;
    state.currentCourseId = null;
    state.searchQuery = '';
    state.disciplineFilterQuery = '';
    if (elements.globalSearchInput) elements.globalSearchInput.value = '';
    if (elements.submenuFilterInput) elements.submenuFilterInput.value = '';

    renderPrimaryNav();
    renderSubmenu();

    if (disciplineId === 'welcome') {
      renderWelcomeView();
    } else {
      renderDisciplineOverview(disciplineId);
    }

    if (updateHash) {
      updateUrlHash(disciplineId);
    }

    // Close mobile drawer if open
    if (elements.colPrimaryNav) {
      elements.colPrimaryNav.classList.remove('open');
    }
  }

  function navigateToCourse(courseId, updateHash = true) {
    const course = CatalogService.getCourseById(courseId);
    if (!course) return;

    state.currentDisciplineId = course.discipline;
    state.currentCourseId = courseId;
    state.searchQuery = '';
    if (elements.globalSearchInput) elements.globalSearchInput.value = '';

    renderPrimaryNav();
    renderSubmenu();
    renderCourseDetail(courseId);

    if (updateHash) {
      updateUrlHash(course.discipline, courseId);
    }

    // Close mobile drawers
    if (elements.colPrimaryNav) elements.colPrimaryNav.classList.remove('open');
    if (elements.colSubmenuNav) elements.colSubmenuNav.classList.remove('open');
  }

  // ==========================================================================
  // Column 1: Primary Navigation (Disciplines)
  // ==========================================================================

  function renderPrimaryNav() {
    if (!elements.primaryNavContainer) return;

    const disciplines = CatalogService.getAllDisciplines();
    const allCourses = CatalogService.getAllCourses();

    let html = '';
    disciplines.forEach(disc => {
      const isActive = state.currentDisciplineId === disc.id;
      const count = disc.id === 'welcome' 
        ? allCourses.length 
        : allCourses.filter(c => c.discipline === disc.id).length;

      html += `
        <li class="nav-item ${isActive ? 'active' : ''}" data-discipline="${disc.id}">
          <span class="nav-item-label">${escapeHtml(disc.name)}</span>
          <span class="nav-item-count">${count}</span>
        </li>
      `;
    });

    elements.primaryNavContainer.innerHTML = html;

    // Attach click handlers
    elements.primaryNavContainer.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const discId = item.getAttribute('data-discipline');
        navigateToDiscipline(discId);
      });
    });
  }

  // ==========================================================================
  // Column 2: Sub-Menu (Topics & Course Directory)
  // ==========================================================================

  function renderSubmenu() {
    if (!elements.submenuContainer) return;

    const currentDisc = CatalogService.getDisciplineById(state.currentDisciplineId);
    if (!currentDisc) return;

    // Handle Welcome page directory
    if (state.currentDisciplineId === 'welcome') {
      elements.submenuHeading.textContent = 'Curriculum Hub';
      elements.submenuCount.textContent = 'All Disciplines';
      renderWelcomeSubmenu();
      return;
    }

    // Engineering Discipline View
    elements.submenuHeading.textContent = currentDisc.name;

    let courses = CatalogService.getCoursesByDiscipline(state.currentDisciplineId);

    // Apply institution filter
    if (state.institutionFilter !== 'all') {
      courses = courses.filter(c => c.institution === state.institutionFilter);
    }

    // Apply submenu query filter
    if (state.disciplineFilterQuery) {
      courses = courses.filter(c => 
        c.title.toLowerCase().includes(state.disciplineFilterQuery) ||
        c.code.toLowerCase().includes(state.disciplineFilterQuery) ||
        c.topic.toLowerCase().includes(state.disciplineFilterQuery)
      );
    }

    elements.submenuCount.textContent = `${courses.length} course${courses.length === 1 ? '' : 's'}`;

    if (courses.length === 0) {
      elements.submenuContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-title">No Courses Match</div>
          <p class="wiki-p" style="font-size: 11.5px;">Try changing the institution filter or search query.</p>
        </div>
      `;
      return;
    }

    // Group courses by Topic
    const grouped = {};
    courses.forEach(c => {
      if (!grouped[c.topic]) grouped[c.topic] = [];
      grouped[c.topic].push(c);
    });

    let html = '';
    for (const [topic, topicCourses] of Object.entries(grouped)) {
      html += `
        <div class="topic-group">
          <div class="topic-group-title">${escapeHtml(topic)}</div>
      `;

      topicCourses.forEach(c => {
        const isActive = state.currentCourseId === c.id;
        const isBookmarked = state.bookmarks.has(c.id);
        const isCompleted = state.completed.has(c.id);

        html += `
          <div class="course-item-card ${isActive ? 'active' : ''}" data-course-id="${c.id}">
            <div class="course-item-header">
              <span class="course-code-tag">${escapeHtml(c.code)}</span>
              <span class="inst-pill">${escapeHtml(c.institution)}</span>
            </div>
            <div class="course-item-title">${escapeHtml(c.title)}</div>
            <div class="course-item-footer">
              <span>${escapeHtml(c.level)}</span>
              ${isCompleted ? '<span style="color: var(--text-success); font-weight: 600;">[Done]</span>' : ''}
              ${isBookmarked ? '<span style="color: var(--text-link);">[Saved]</span>' : ''}
            </div>
          </div>
        `;
      });

      html += `</div>`;
    }

    elements.submenuContainer.innerHTML = html;

    // Attach click events
    elements.submenuContainer.querySelectorAll('.course-item-card').forEach(card => {
      card.addEventListener('click', () => {
        const courseId = card.getAttribute('data-course-id');
        navigateToCourse(courseId);
      });
    });
  }

  function renderWelcomeSubmenu() {
    const disciplines = CatalogService.getAllDisciplines().filter(d => d.id !== 'welcome');
    let html = `
      <div class="topic-group">
        <div class="topic-group-title">All Engineering Tracks</div>
    `;

    disciplines.forEach(d => {
      const courses = CatalogService.getCoursesByDiscipline(d.id);
      html += `
        <div class="course-item-card" data-jump-disc="${d.id}">
          <div class="course-item-header">
            <span class="course-code-tag">${escapeHtml(d.shortName)}</span>
            <span class="inst-pill">${courses.length} courses</span>
          </div>
          <div class="course-item-title">${escapeHtml(d.name)}</div>
          <div class="course-item-footer">${escapeHtml(d.desc)}</div>
        </div>
      `;
    });

    html += `</div>`;
    elements.submenuContainer.innerHTML = html;

    elements.submenuContainer.querySelectorAll('[data-jump-disc]').forEach(item => {
      item.addEventListener('click', () => {
        const discId = item.getAttribute('data-jump-disc');
        navigateToDiscipline(discId);
      });
    });
  }

  // ==========================================
  // Column 3: Main Course Detail (CS-DIY Technique)
  // ==========================================

  function renderCourseDetail(courseId) {
    if (!elements.mainContentContainer) return;

    const course = CatalogService.getCourseById(courseId);
    if (!course) {
      renderWelcomeView();
      return;
    }

    const disc = CatalogService.getDisciplineById(course.discipline);
    const isBookmarked = state.bookmarks.has(course.id);
    const isCompleted = state.completed.has(course.id);

    // Build breadcrumb
    const breadcrumbHtml = `
      <nav class="breadcrumb-bar" aria-label="Breadcrumb">
        <span class="breadcrumb-item"><a href="#welcome" class="internal-nav" data-disc="welcome">Home</a></span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-item"><a href="#${disc.id}" class="internal-nav" data-disc="${disc.id}">${escapeHtml(disc.shortName)}</a></span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-item">${escapeHtml(course.topic)}</span>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-item active">${escapeHtml(course.code)}</span>
      </nav>
    `;

    // Action buttons
    const actionButtonsHtml = `
      <div class="course-action-bar">
        <button class="btn-classic ${isBookmarked ? 'active' : ''}" id="btn-toggle-bookmark">
          ${isBookmarked ? 'Saved in Plan' : 'Save to Study Plan'}
        </button>
        <button class="btn-classic ${isCompleted ? 'active' : ''}" id="btn-toggle-completed">
          ${isCompleted ? 'Completed' : 'Mark as Completed'}
        </button>
        <button class="btn-classic" id="btn-copy-link">
          Copy Course Link
        </button>
      </div>
    `;

    // Quick Links Grid (The core CS-DIY technique)
    const links = course.links || {};
    const quickLinksHtml = `
      <div class="quick-links-grid">
        ${links.website ? `
          <a href="${links.website}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
            <span class="quick-link-label">Official Portal</span>
            <span class="quick-link-title">Course Homepage</span>
          </a>
        ` : ''}
        ${links.lectures ? `
          <a href="${links.lectures}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
            <span class="quick-link-label">Video Stream</span>
            <span class="quick-link-title">Video Lectures</span>
          </a>
        ` : ''}
        ${links.syllabus ? `
          <a href="${links.syllabus}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
            <span class="quick-link-label">Curriculum</span>
            <span class="quick-link-title">Syllabus & Schedule</span>
          </a>
        ` : ''}
        ${links.textbook ? `
          <a href="${links.textbook}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
            <span class="quick-link-label">Core Reading</span>
            <span class="quick-link-title">Textbook & Notes</span>
          </a>
        ` : ''}
        ${links.assignments ? `
          <a href="${links.assignments}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
            <span class="quick-link-label">Coursework</span>
            <span class="quick-link-title">Assignments & Labs</span>
          </a>
        ` : ''}
        ${links.autograder ? `
          <a href="${links.autograder}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
            <span class="quick-link-label">Validation</span>
            <span class="quick-link-title">Autograder / Tests</span>
          </a>
        ` : ''}
        ${links.exams ? `
          <a href="${links.exams}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
            <span class="quick-link-label">Assessments</span>
            <span class="quick-link-title">Exam Archive</span>
          </a>
        ` : ''}
      </div>
    `;

    // Prerequisites links
    let prereqHtml = (course.prerequisites || []).map((p, idx) => {
      const prereqId = (course.prerequisiteIds || [])[idx];
      if (prereqId) {
        return `<a href="#${prereqId}" class="course-prereq-link" data-course-id="${prereqId}">${escapeHtml(p)}</a>`;
      }
      return escapeHtml(p);
    }).join(', ');

    if (!prereqHtml) prereqHtml = 'None specified';

    // Academic Metadata Table
    const metadataTableHtml = `
      <table class="academic-table">
        <tbody>
          <tr>
            <th>Course Code</th>
            <td><code>${escapeHtml(course.code)}</code></td>
          </tr>
          <tr>
            <th>Institution</th>
            <td><strong>${escapeHtml(course.institutionFullName)}</strong> (${escapeHtml(course.institution)})</td>
          </tr>
          <tr>
            <th>Discipline & Topic</th>
            <td>${escapeHtml(disc.name)} &mdash; ${escapeHtml(course.topic)}</td>
          </tr>
          <tr>
            <th>Academic Level</th>
            <td>${escapeHtml(course.level)} &bull; Difficulty: ${escapeHtml(course.difficulty)}</td>
          </tr>
          <tr>
            <th>Estimated Effort</th>
            <td>${escapeHtml(course.estimatedHours)}</td>
          </tr>
          <tr>
            <th>Language</th>
            <td>${escapeHtml(course.language)} (Lecture videos, notes & problem sets)</td>
          </tr>
          <tr>
            <th>Prerequisites</th>
            <td>${prereqHtml}</td>
          </tr>
        </tbody>
      </table>
    `;

    // Syllabus Modules
    let syllabusHtml = '';
    if (course.syllabusModules && course.syllabusModules.length > 0) {
      syllabusHtml = `
        <div class="wiki-section">
          <h2 class="wiki-section-heading">Syllabus & Core Modules</h2>
          <div class="syllabus-modules-list">
            ${course.syllabusModules.map(m => `
              <div class="syllabus-module-row">
                <div class="module-time-col">${escapeHtml(m.week)}</div>
                <div class="module-content-col">
                  <div class="module-title">${escapeHtml(m.title)}</div>
                  <div class="module-desc">${escapeHtml(m.desc)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Hands-on Labs & Projects (The heart of CS-DIY technique)
    let labsHtml = '';
    if (course.labs && course.labs.length > 0) {
      labsHtml = `
        <div class="wiki-section">
          <h2 class="wiki-section-heading">Laboratory Projects & Assignments</h2>
          <p class="wiki-p">
            The core premise of the CS-DIY methodology is that true engineering competence is forged through rigorous, hands-on programming labs and problem sets. Complete each assignment locally:
          </p>
          <div class="labs-container">
            ${course.labs.map((l, i) => `
              <div class="lab-card">
                <div class="lab-card-title">
                  <span class="lab-badge">Assignment ${i + 1}</span>
                  <span>${escapeHtml(l.name)}</span>
                </div>
                <div class="lab-card-desc">${escapeHtml(l.desc)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Textbook Section
    let textbookHtml = '';
    if (course.textbookInfo) {
      textbookHtml = `
        <div class="wiki-section">
          <h2 class="wiki-section-heading">Recommended Text & Readings</h2>
          <table class="academic-table">
            <tbody>
              <tr>
                <th>Title</th>
                <td><strong>${escapeHtml(course.textbookInfo.title)}</strong></td>
              </tr>
              <tr>
                <th>Authors</th>
                <td>${escapeHtml(course.textbookInfo.authors)}</td>
              </tr>
              <tr>
                <th>Notes</th>
                <td>${escapeHtml(course.textbookInfo.notes)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    }

    // Self Study Tips & Pitfalls
    let selfStudyHtml = '';
    if (course.selfStudyTips) {
      selfStudyHtml = `
        <div class="wiki-section">
          <h2 class="wiki-section-heading">Self-Study Guide & Practice Advice</h2>
          <div class="classic-callout">
            <strong>Self-Taught Engineering Protocol:</strong> ${escapeHtml(course.selfStudyTips)}
          </div>
        </div>
      `;
    }

    // Alternatives
    let alternativesHtml = '';
    if (course.alternatives && course.alternatives.length > 0) {
      alternativesHtml = `
        <div class="wiki-section">
          <h2 class="wiki-section-heading">Comparable & Alternative Offerings</h2>
          <p class="wiki-p">If you want additional perspective or alternate pacing, consider these equivalent courses:</p>
          <div class="alternatives-list">
            ${course.alternatives.map(alt => `
              <span class="alt-tag">${escapeHtml(alt)}</span>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Assemble Full Document
    const fullHtml = `
      <div class="content-inner-wrapper">
        ${breadcrumbHtml}

        <header class="course-hero">
          <div class="course-hero-code">${escapeHtml(course.code)} &bull; ${escapeHtml(course.institutionFullName)}</div>
          <h1 class="course-hero-title">${escapeHtml(course.title)}</h1>
          
          <div class="course-hero-badges">
            <span class="hero-meta-badge"><span class="meta-label">Institution:</span> <span class="meta-value">${escapeHtml(course.institution)}</span></span>
            <span class="hero-meta-badge"><span class="meta-label">Level:</span> <span class="meta-value">${escapeHtml(course.level)}</span></span>
            <span class="hero-meta-badge"><span class="meta-label">Estimated:</span> <span class="meta-value">${escapeHtml(course.estimatedHours)}</span></span>
            <span class="hero-meta-badge"><span class="meta-label">Medium:</span> <span class="meta-value">English</span></span>
          </div>

          ${actionButtonsHtml}
        </header>

        <section class="wiki-section">
          <h2 class="wiki-section-heading">Direct Resources</h2>
          ${quickLinksHtml}
        </section>

        <section class="wiki-section">
          <h2 class="wiki-section-heading">Course Specifications</h2>
          ${metadataTableHtml}
        </section>

        <section class="wiki-section">
          <h2 class="wiki-section-heading">Course Overview</h2>
          <p class="wiki-p">${escapeHtml(course.overview)}</p>
          <div class="classic-callout">
            <strong>Why This Course is Recommended:</strong> ${escapeHtml(course.whyRecommended)}
          </div>
        </section>

        ${syllabusHtml}
        ${labsHtml}
        ${textbookHtml}
        ${selfStudyHtml}
        ${alternativesHtml}
      </div>
    `;

    elements.mainContentContainer.innerHTML = fullHtml;
    elements.mainContentContainer.scrollTop = 0;

    // Attach Event Handlers
    const bookmarkBtn = document.getElementById('btn-toggle-bookmark');
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', () => {
        toggleBookmark(course.id);
        renderCourseDetail(course.id);
        renderSubmenu();
      });
    }

    const completedBtn = document.getElementById('btn-toggle-completed');
    if (completedBtn) {
      completedBtn.addEventListener('click', () => {
        toggleCompleted(course.id);
        renderCourseDetail(course.id);
        renderSubmenu();
      });
    }

    const copyBtn = document.getElementById('btn-copy-link');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          copyBtn.textContent = 'Link Copied!';
          setTimeout(() => { copyBtn.textContent = 'Copy Course Link'; }, 2000);
        });
      });
    }

    // Prerequisite direct navigation links
    elements.mainContentContainer.querySelectorAll('.course-prereq-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cid = link.getAttribute('data-course-id');
        navigateToCourse(cid);
      });
    });

    elements.mainContentContainer.querySelectorAll('.internal-nav').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const discId = link.getAttribute('data-disc');
        navigateToDiscipline(discId);
      });
    });
  }

  // ==========================================
  // Welcome / Home View
  // ==========================================

  function renderWelcomeView() {
    if (!elements.mainContentContainer) return;

    const allCourses = CatalogService.getAllCourses();
    const disciplines = CatalogService.getAllDisciplines().filter(d => d.id !== 'welcome');

    let discCardsHtml = '';
    disciplines.forEach(d => {
      const courses = CatalogService.getCoursesByDiscipline(d.id);
      discCardsHtml += `
        <div class="discipline-card" data-disc-id="${d.id}">
          <div class="discipline-card-title">
            <span>${escapeHtml(d.name)}</span>
            <span class="inst-pill">${courses.length} courses</span>
          </div>
          <div class="discipline-card-desc">${escapeHtml(d.desc)}</div>
        </div>
      `;
    });

    const fullHtml = `
      <div class="content-inner-wrapper">
        <header class="welcome-hero">
          <h1 class="welcome-title">DIY Engineering</h1>
          <p class="welcome-subtitle">
            An open, comprehensive self-study curriculum spanning fundamental engineering disciplines and computer science.
            Modeled after the rigorous standard of the <strong>CS-DIY Wiki</strong>.
          </p>
          <div class="classic-callout" style="margin-top: 16px;">
            <strong>Curriculum Standards:</strong> Every course featured in this catalog provides open lecture videos, comprehensive syllabi, English textbooks, and authentic autograded assignments/labs from world-leading engineering institutions: 
            <strong>MIT OCW, Carnegie Mellon (CMU), Stanford, UC Berkeley, Georgia Tech, OpenSecurityTraining2 (OST2), pwn.college, and NPTEL (IITs)</strong>.
          </div>
        </header>

        <section class="wiki-section">
          <h2 class="wiki-section-heading">Browse Engineering Disciplines</h2>
          <div class="disciplines-grid">
            ${discCardsHtml}
          </div>
        </section>

        <section class="wiki-section">
          <h2 class="wiki-section-heading">The CS-DIY Self-Study Methodology</h2>
          <p class="wiki-p">
            Traditional self-learning often fails because learners passively watch lecture videos without building systems or working through problem sets. The CS-DIY framework enforces a rigorous 5-step loop:
          </p>
          
          <div class="method-step">
            <div class="method-step-num">1</div>
            <div class="method-step-body">
              <div class="method-step-title">Study Theory & Lecture Notes</div>
              <div class="method-step-text">Watch the high-definition university lecture recordings. Pause frequently to verify mathematical derivations and architectural diagrams on scratch paper.</div>
            </div>
          </div>

          <div class="method-step">
            <div class="method-step-num">2</div>
            <div class="method-step-body">
              <div class="method-step-title">Read the Official Textbook</div>
              <div class="method-step-text">Never skip the textbook chapters assigned in the syllabus. High-level summaries miss the corner cases and formal invariants that define elite engineers.</div>
            </div>
          </div>

          <div class="method-step">
            <div class="method-step-num">3</div>
            <div class="method-step-body">
              <div class="method-step-title">Execute the Programming Labs & Problem Sets</div>
              <div class="method-step-text">The heart of this curriculum is hands-on code. Whether implementing xv6 page tables, writing a C++ TCP stack in Minnow, or building a Raft consensus cluster in Go, code every lab yourself.</div>
            </div>
          </div>

          <div class="method-step">
            <div class="method-step-num">4</div>
            <div class="method-step-body">
              <div class="method-step-title">Verify with Local Autograders</div>
              <div class="method-step-text">Use the bundled test suites, perl driver scripts, and python evaluation harnesses. Strive for 100% test pass rates and zero memory leaks under Valgrind.</div>
            </div>
          </div>

          <div class="method-step">
            <div class="method-step-num">5</div>
            <div class="method-step-body">
              <div class="method-step-title">Document & Publish to GitHub</div>
              <div class="method-step-text">Write clear technical reports for each milestone project and publish clean, production-grade repositories to build your professional engineering portfolio.</div>
            </div>
          </div>
        </section>

        <section class="wiki-section">
          <h2 class="wiki-section-heading">Curated University & Training Providers</h2>
          <div class="provider-row">
            <div><strong>MIT OpenCourseWare (MIT OCW)</strong> &mdash; Cambridge, MA</div>
            <span class="inst-pill">Math, Physics, Circuits, OS, Algorithms, Mech, Civil</span>
          </div>
          <div class="provider-row">
            <div><strong>Carnegie Mellon University (CMU)</strong> &mdash; Pittsburgh, PA</div>
            <span class="inst-pill">Computer Systems (15-213), Databases (Andy Pavlo), Robotics Vision</span>
          </div>
          <div class="provider-row">
            <div><strong>Stanford University</strong> &mdash; Stanford, CA</div>
            <span class="inst-pill">Networking (CS144), Machine Learning (CS229), Vision, Compilers</span>
          </div>
          <div class="provider-row">
            <div><strong>University of California, Berkeley</strong> &mdash; Berkeley, CA</div>
            <span class="inst-pill">CS61A (SICP), CS61B (Algorithms), CS61C (Architecture), CS162 (OS)</span>
          </div>
          <div class="provider-row">
            <div><strong>Georgia Institute of Technology (Georgia Tech)</strong> &mdash; Atlanta, GA</div>
            <span class="inst-pill">Operating Systems (CS6200), Compilers, Signal Processing</span>
          </div>
          <div class="provider-row">
            <div><strong>OpenSecurityTraining2 (OST2)</strong> &mdash; Non-Profit Security Hub</div>
            <span class="inst-pill">x86-64 Assembly, Vulnerability Analysis, Reverse Engineering</span>
          </div>
          <div class="provider-row">
            <div><strong>pwn.college</strong> &mdash; Arizona State University / Yan Shoshitaishvili</div>
            <span class="inst-pill">Hands-on Binary Exploitation, Shellcoding, Linux Kernel</span>
          </div>
          <div class="provider-row">
            <div><strong>NPTEL</strong> &mdash; Premier IITs (Madras, Kharagpur, Kanpur, Bombay)</div>
            <span class="inst-pill">Thermodynamics, Solid Mechanics, Fluid Mechanics, Control Systems</span>
          </div>
        </section>

        <section class="wiki-section">
          <h2 class="wiki-section-heading">Recommended Self-Study Environment Setup</h2>
          <table class="academic-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Recommended Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating System</td>
                <td>Ubuntu 22.04 LTS / Debian 12 (Native, Dual-Boot, or WSL2 on Windows)</td>
              </tr>
              <tr>
                <td>Build Toolchain</td>
                <td><code>gcc</code>, <code>g++</code>, <code>clang</code>, <code>make</code>, <code>cmake</code>, <code>ninja</code></td>
              </tr>
              <tr>
                <td>Debugging & Profiling</td>
                <td><code>gdb</code>, <code>valgrind</code>, <code>strace</code>, <code>ltrace</code>, <code>perf</code></td>
              </tr>
              <tr>
                <td>Emulators</td>
                <td><code>qemu-system-riscv64</code> (for MIT 6.S081 kernel), <code>spim</code> (for CS143)</td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>C (C11), C++ (C++20), Python 3.11+, Go 1.22+, Java 17+</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    `;

    elements.mainContentContainer.innerHTML = fullHtml;
    elements.mainContentContainer.scrollTop = 0;

    // Attach click events on discipline cards
    elements.mainContentContainer.querySelectorAll('.discipline-card').forEach(card => {
      card.addEventListener('click', () => {
        const discId = card.getAttribute('data-disc-id');
        navigateToDiscipline(discId);
      });
    });
  }

  // ==========================================
  // Discipline Overview View
  // ==========================================

  function renderDisciplineOverview(disciplineId) {
    if (!elements.mainContentContainer) return;

    const disc = CatalogService.getDisciplineById(disciplineId);
    if (!disc) return;

    let courses = CatalogService.getCoursesByDiscipline(disciplineId);

    // Apply institution filter
    if (state.institutionFilter !== 'all') {
      courses = courses.filter(c => c.institution === state.institutionFilter);
    }

    let courseListHtml = '';
    courses.forEach(c => {
      const isBookmarked = state.bookmarks.has(c.id);
      const isCompleted = state.completed.has(c.id);

      courseListHtml += `
        <div class="search-result-card" data-course-id="${c.id}">
          <div class="search-result-header">
            <div>
              <span class="course-code-tag">${escapeHtml(c.code)}</span>
              &nbsp;&bull;&nbsp;
              <span class="search-result-title">${escapeHtml(c.title)}</span>
            </div>
            <div>
              <span class="inst-pill">${escapeHtml(c.institution)}</span>
              ${isCompleted ? '<span class="hero-meta-badge" style="color: var(--text-success);">[Completed]</span>' : ''}
              ${isBookmarked ? '<span class="hero-meta-badge" style="color: var(--text-link);">[Saved]</span>' : ''}
            </div>
          </div>
          <div class="course-item-footer">
            <span><strong>Topic:</strong> ${escapeHtml(c.topic)}</span>
            &bull;
            <span><strong>Level:</strong> ${escapeHtml(c.level)}</span>
            &bull;
            <span><strong>Effort:</strong> ${escapeHtml(c.estimatedHours)}</span>
          </div>
          <div class="search-result-snippet">${escapeHtml(c.overview)}</div>
        </div>
      `;
    });

    const fullHtml = `
      <div class="content-inner-wrapper">
        <header class="course-hero">
          <div class="course-hero-code">Engineering Curriculum &bull; Discipline Track</div>
          <h1 class="course-hero-title">${escapeHtml(disc.name)}</h1>
          <p class="wiki-p">${escapeHtml(disc.desc)}</p>
          <div class="course-hero-badges">
            <span class="hero-meta-badge"><span class="meta-label">Curriculum:</span> <span class="meta-value">${courses.length} Standard Courses</span></span>
            <span class="hero-meta-badge"><span class="meta-label">Medium:</span> <span class="meta-value">English</span></span>
            <span class="hero-meta-badge"><span class="meta-label">Cost:</span> <span class="meta-value">100% Free / Open Source</span></span>
          </div>
        </header>

        <section class="wiki-section">
          <h2 class="wiki-section-heading">Courses in this Track</h2>
          <p class="wiki-p">Select any course from the sub-menu on the left or click from the directory below to view the complete CS-DIY course specification:</p>
          <div class="search-results-container">
            ${courseListHtml || '<div class="empty-state"><div class="empty-state-title">No courses match the active filter.</div></div>'}
          </div>
        </section>
      </div>
    `;

    elements.mainContentContainer.innerHTML = fullHtml;
    elements.mainContentContainer.scrollTop = 0;

    elements.mainContentContainer.querySelectorAll('.search-result-card').forEach(card => {
      card.addEventListener('click', () => {
        const cid = card.getAttribute('data-course-id');
        navigateToCourse(cid);
      });
    });
  }

  // ==========================================
  // Global Search Results View
  // ==========================================

  function renderSearchResults() {
    if (!elements.mainContentContainer) return;

    const query = state.searchQuery;
    const results = CatalogService.search(query, state.institutionFilter);

    let html = `
      <div class="content-inner-wrapper">
        <header class="course-hero">
          <div class="course-hero-code">Global Search Catalog</div>
          <h1 class="course-hero-title">Search Results for "${escapeHtml(query)}"</h1>
          <p class="wiki-p">Found <strong>${results.length}</strong> matching course${results.length === 1 ? '' : 's'}.</p>
        </header>

        <div class="search-results-container">
    `;

    if (results.length === 0) {
      html += `
        <div class="empty-state">
          <div class="empty-state-title">No courses found matching "${escapeHtml(query)}"</div>
          <p class="wiki-p">Try searching for course codes (e.g., <code>15-213</code>, <code>6.006</code>, <code>CS144</code>), keywords (e.g., <code>thermodynamics</code>, <code>operating systems</code>, <code>assembly</code>), or institutions (e.g., <code>MIT</code>, <code>CMU</code>).</p>
        </div>
      `;
    } else {
      results.forEach(course => {
        const disc = CatalogService.getDisciplineById(course.discipline);
        html += `
          <div class="search-result-card" data-course-id="${course.id}">
            <div class="search-result-header">
              <div>
                <span class="course-code-tag">${escapeHtml(course.code)}</span>
                &nbsp;&bull;&nbsp;
                <span class="search-result-title">${escapeHtml(course.title)}</span>
              </div>
              <span class="inst-pill">${escapeHtml(course.institution)}</span>
            </div>
            <div class="course-item-footer">
              <span>${escapeHtml(disc ? disc.shortName : '')} &bull; ${escapeHtml(course.topic)}</span>
              &bull;
              <span>${escapeHtml(course.level)}</span>
            </div>
            <div class="search-result-snippet">${escapeHtml(course.overview)}</div>
          </div>
        `;
      });
    }

    html += `
        </div>
      </div>
    `;

    elements.mainContentContainer.innerHTML = html;
    elements.mainContentContainer.scrollTop = 0;

    elements.mainContentContainer.querySelectorAll('.search-result-card').forEach(card => {
      card.addEventListener('click', () => {
        const cid = card.getAttribute('data-course-id');
        navigateToCourse(cid);
      });
    });
  }

  // ==========================================
  // Bookmark & Completion State
  // ==========================================

  function toggleBookmark(courseId) {
    if (state.bookmarks.has(courseId)) {
      state.bookmarks.delete(courseId);
    } else {
      state.bookmarks.add(courseId);
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(Array.from(state.bookmarks)));
    updateSavedCountUI();
  }

  function toggleCompleted(courseId) {
    if (state.completed.has(courseId)) {
      state.completed.delete(courseId);
    } else {
      state.completed.add(courseId);
    }
    localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(Array.from(state.completed)));
  }

  function openSavedModal() {
    if (!elements.savedModal || !elements.modalSavedList) return;

    const savedIds = Array.from(state.bookmarks);
    let html = '';

    if (savedIds.length === 0) {
      html = `
        <div class="empty-state">
          <div class="empty-state-title">No Saved Courses Yet</div>
          <p class="wiki-p" style="font-size: 12.5px;">Click "Save to Study Plan" on any course to track it here.</p>
        </div>
      `;
    } else {
      html = '<div class="saved-items-grid">';
      savedIds.forEach(id => {
        const course = CatalogService.getCourseById(id);
        if (!course) return;
        const isDone = state.completed.has(id);

        html += `
          <div class="search-result-card" data-modal-course="${course.id}">
            <div class="search-result-header">
              <span class="course-code-tag">${escapeHtml(course.code)}</span>
              <span class="inst-pill">${escapeHtml(course.institution)}</span>
            </div>
            <div class="search-result-title" style="margin-top: 4px;">${escapeHtml(course.title)}</div>
            <div class="course-item-footer" style="margin-top: 6px;">
              <span>${escapeHtml(course.level)}</span>
              ${isDone ? '<span style="color: var(--text-success); font-weight: 600;">[Completed]</span>' : ''}
            </div>
          </div>
        `;
      });
      html += '</div>';
    }

    elements.modalSavedList.innerHTML = html;
    elements.savedModal.classList.add('open');

    elements.modalSavedList.querySelectorAll('[data-modal-course]').forEach(item => {
      item.addEventListener('click', () => {
        const cid = item.getAttribute('data-modal-course');
        closeSavedModal();
        navigateToCourse(cid);
      });
    });
  }

  function closeSavedModal() {
    if (elements.savedModal) {
      elements.savedModal.classList.remove('open');
    }
  }

  // ==========================================
  // Helper Utilities
  // ==========================================

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
