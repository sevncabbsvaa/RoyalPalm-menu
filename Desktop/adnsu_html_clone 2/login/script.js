const LANGUAGE_META = {
  en: { name: 'English', label: 'Language:', flag: 'flag-en.png', alt: 'English flag' },
  az: { name: 'Azərbaycan', label: 'Dil:', flag: 'flag-az.png', alt: 'Azərbaycan flag' },
  ru: { name: 'Русский', label: 'Язык:', flag: 'flag-ru.png', alt: 'Русский flag' }
};

const PAGE_TEXT = {
  login: {
    en: {
      title: 'Welcome',
      subtitle: 'Sign in to the system',
      username: 'Username',
      password: 'Password',
      show: 'Show',
      hide: 'Hide',
      forgot: 'Forgot password?',
      signIn: 'Sign in',
      continue: 'or continue with',
      magicLink: 'Send one-time link'
    },
    az: {
      title: 'Xoş gəlmisiniz',
      subtitle: 'Hesabınıza daxil olmaq üçün giriş edin',
      username: 'İstifadəçi adı',
      password: 'Şifrə',
      show: 'Göstər',
      hide: 'Gizlət',
      forgot: 'Şifrəni unutmusunuz?',
      signIn: 'Daxil ol',
      continue: 'və ya davam edin',
      magicLink: 'Bir dəfəlik giriş linkini e-poçtla göndər'
    },
    ru: {
      title: 'Добро пожаловать',
      subtitle: 'Войдите в систему',
      username: 'Имя пользователя',
      password: 'Пароль',
      show: 'Показать',
      hide: 'Скрыть',
      forgot: 'Забыли пароль?',
      signIn: 'Войти',
      continue: 'или продолжить с',
      magicLink: 'Отправить одноразовую ссылку'
    }
  },
  magic: {
    en: {
      title: 'One-Time Login Link',
      subtitle: 'Enter your email to receive a secure, one-time login link.',
      emailLabel: 'Email for Magic Link',
      send: 'Send one-time link'
    },
    az: {
      title: 'Birdəfəlik giriş linki',
      subtitle: 'Təhlükəsiz, birdəfəlik giriş linkini almaq üçün e-poçtunuzu daxil edin.',
      emailLabel: 'Giriş linki üçün e-poçt',
      send: 'Birdəfəlik link göndər'
    },
    ru: {
      title: 'Одноразовая ссылка для входа',
      subtitle: 'Введите email, чтобы получить безопасную одноразовую ссылку для входа.',
      emailLabel: 'Email для одноразовой ссылки',
      send: 'Отправить одноразовую ссылку'
    }
  }
};

(function initAdnsuClone() {
  const body = document.body;
  const page = body.dataset.page;
  const defaultLang = body.dataset.defaultLang || 'ru';
  const langButton = document.getElementById('langButton');
  const langMenu = document.getElementById('langMenu');
  const langDropdown = document.getElementById('langDropdown');
  const currentFlag = document.getElementById('currentLangFlag');
  const currentLangName = document.querySelector('.lang-current-name');
  const currentLangLabel = document.querySelector('.lang-mobile-label');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');
  const loginForm = document.getElementById('loginForm');
  const magicForm = document.getElementById('magicForm');

  let currentLang = getInitialLang(defaultLang);

  function getInitialLang(fallback) {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang && LANGUAGE_META[urlLang]) return urlLang;

    const storedLang = localStorage.getItem('adnsu-manual-lang');
    if (storedLang && LANGUAGE_META[storedLang]) return storedLang;

    return fallback;
  }

  function getAssetPath(fileName) {
    return page === 'magic' ? `../../assets/${fileName}` : `../assets/${fileName}`;
  }

  function applyLanguage(lang) {
    if (!PAGE_TEXT[page] || !PAGE_TEXT[page][lang]) return;

    currentLang = lang;
    document.documentElement.lang = lang;
    const copy = PAGE_TEXT[page][lang];

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (copy[key]) node.textContent = copy[key];
    });

    if (currentFlag) {
      currentFlag.src = getAssetPath(LANGUAGE_META[lang].flag);
      currentFlag.alt = LANGUAGE_META[lang].alt;
    }

    if (currentLangName) {
      currentLangName.textContent = LANGUAGE_META[lang].name;
    }

    if (currentLangLabel) {
      currentLangLabel.textContent = LANGUAGE_META[lang].label;
    }

    document.querySelectorAll('.lang-option').forEach((item) => {
      item.classList.toggle('active', item.dataset.lang === lang);
    });

    if (togglePassword && passwordInput) {
      togglePassword.textContent = passwordInput.type === 'password' ? copy.show : copy.hide;
    }
  }

  function setManualLanguage(lang) {
    localStorage.setItem('adnsu-manual-lang', lang);
    applyLanguage(lang);
    closeMenu();
  }

  function openMenu() {
    if (!langDropdown || !langButton) return;
    langDropdown.classList.add('open');
    langButton.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    if (!langDropdown || !langButton) return;
    langDropdown.classList.remove('open');
    langButton.setAttribute('aria-expanded', 'false');
  }

  if (langButton && langMenu && langDropdown) {
    langButton.addEventListener('click', (event) => {
      event.stopPropagation();
      if (langDropdown.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.querySelectorAll('.lang-option').forEach((item) => {
      item.addEventListener('click', () => setManualLanguage(item.dataset.lang));
    });

    document.addEventListener('click', (event) => {
      if (!langDropdown.contains(event.target)) closeMenu();
    });
  }

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
      const isHidden = passwordInput.type === 'password';
      passwordInput.type = isHidden ? 'text' : 'password';
      const copy = PAGE_TEXT[page][currentLang];
      togglePassword.textContent = isHidden ? copy.hide : copy.show;
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => event.preventDefault());
  }

  if (magicForm) {
    magicForm.addEventListener('submit', (event) => event.preventDefault());
  }

  applyLanguage(currentLang);
})();