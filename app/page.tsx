import { SignalIcon } from "./components/SignalIcon";

const demoCandidate = {
  id: "TS-147",
  rank: "02",
  role: "Quant Research / Applied ML",
  overallScore: "94.6",
  openScore: "0.947",
  percentile: "Top 1%",
  researchScore: "4.8 / 5",
};

const candidateEvidence = [
  { label: "Методология", score: 96 },
  { label: "Глубина исследования", score: 95 },
  { label: "Качество кода", score: 92 },
  { label: "Устойчивость", score: 94 },
];

const sampleTalentPool = [
  { rank: "01", id: "TS-031", focus: "Quant Trading", score: "95.8" },
  {
    rank: demoCandidate.rank,
    id: demoCandidate.id,
    focus: demoCandidate.role,
    score: demoCandidate.overallScore,
    selected: true,
  },
  { rank: "03", id: "TS-009", focus: "Quant Research", score: "93.9" },
  { rank: "08", id: "TS-018", focus: "Applied ML", score: "90.4" },
];

const packageOptions = [
  {
    name: "T0",
    window: "Signal Window · T0",
    accessMoment: "За 48 часов",
    accessNote: "до объявления рейтинга",
    purpose: "Ускорить hiring pipeline",
    price: "$36,000",
    fit: "Раньше других начать работу с сильнейшими кандидатами.",
  },
  {
    name: "T7",
    window: "Signal Window · T7",
    accessMoment: "Через 7 дней",
    accessNote: "после объявления рейтинга",
    purpose: "Запустить sourcing",
    price: "$27,000",
    fit: "Использовать соревнование как канал sourcing и pre-screening.",
  },
  {
    name: "T21",
    window: "Signal Window · T21",
    accessMoment: "Через 21 день",
    accessNote: "после объявления рейтинга",
    purpose: "Оценить talent pool",
    price: "$18,000",
    fit: "Проверить качество аудитории и попробовать формат без глубокого вовлечения.",
  },
];

const packageComparison = [
  {
    feature: "Профили, score и результаты",
    note: "Единый talent pool",
    t21: "Включены",
    t7: "Включены",
    t0: "Включены",
    common: true,
  },
  {
    feature: "Общий отчёт по аудитории",
    t21: "Включён",
    t7: "Включён",
    t0: "Включён",
    common: true,
  },
  {
    feature: "Role-based shortlist",
    note: "Список под целевые роли партнёра",
    t21: "Базовый",
    t7: "Под hiring brief",
    t0: "Расширенный",
  },
  {
    feature: "Контакт с кандидатами",
    note: "Только с согласия участника",
    t21: "Контакты в пуле",
    t7: "Организованные intro",
    t0: "Приоритетные intro",
  },
  {
    feature: "Candidate Reports",
    note: "Результаты, резюме и профессиональный контекст",
    t21: "—",
    t7: "Включены",
    t0: "Расширенные",
  },
  {
    feature: "Hiring brief",
    note: "Настройка отбора под задачи партнёра",
    t21: "—",
    t7: "Стандартный",
    t0: "Расширенный",
  },
  {
    feature: "Challenge Analytics",
    t21: "—",
    t7: "—",
    t0: "Включена",
  },
  {
    feature: "Размещение бренда",
    t21: "Стандартное",
    t7: "Расширенное",
    t0: "Приоритетное",
  },
];

const seasonStages = [
  {
    date: "Ноябрь — декабрь 2026",
    title: "Подготовка сезона",
    description:
      "Разрабатываем задания, датасет и метрику, утверждаем правила и формируем экспертную комиссию.",
    detailLabel: "Результат этапа",
    detail:
      "Готовые задания, методика оценки и правила проведения двух этапов соревнования.",
  },
  {
    date: "Январь — март 2027",
    title: "Привлечение участников",
    description:
      "Запускаем персональные приглашения и кампанию в университетских, профессиональных и quant-сообществах.",
    detailLabel: "Целевой результат",
    detail:
      "1 000 зарегистрированных участников с заполненными профессиональными профилями.",
  },
  {
    date: "Март 2027",
    title: "Open Challenge",
    description:
      "Участники решают общую quant-задачу, а платформа автоматически рассчитывает сравнимый score.",
    detailLabel: "Результат",
    detail:
      "Объективный рейтинг в единых условиях; 100 лучших участников проходят в Research Challenge.",
  },
  {
    date: "Март — апрель 2027",
    title: "Research Challenge",
    description:
      "Финалисты готовят модель или стратегию, воспроизводимый код и краткий research report.",
    detailLabel: "Результат",
    detail:
      "Навыки Top 100 дополнительно проверяются в задаче, приближённой к работе quant research-команды.",
  },
  {
    date: "Апрель 2027",
    title: "Экспертная оценка и доступ",
    description:
      "Не менее двух экспертов независимо оценивают работы, после чего формируются рейтинг и партнёрские отчёты.",
    detailLabel: "Результат для партнёра",
    detail:
      "Профили, score и подтверждающие материалы кандидатов. Момент открытия доступа зависит от формата партнёрства.",
  },
];

type StarFieldVariant =
  | "hero"
  | "market"
  | "process"
  | "talent"
  | "trust"
  | "windows"
  | "contact"
  | "footer";

const starFieldSettings: Record<StarFieldVariant, { count: number; seed: number }> = {
  hero: { count: 20, seed: 147 },
  market: { count: 10, seed: 311 },
  process: { count: 23, seed: 509 },
  talent: { count: 12, seed: 733 },
  trust: { count: 17, seed: 947 },
  windows: { count: 11, seed: 1153 },
  contact: { count: 16, seed: 1361 },
  footer: { count: 6, seed: 1597 },
};

function createSeededRandom(seed: number) {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function StarField({ variant }: { variant: StarFieldVariant }) {
  const { count, seed } = starFieldSettings[variant];
  const random = createSeededRandom(seed);
  const stars = Array.from({ length: count }, (_, index) => {
    const size = 0.65 + random() * 1.15;

    return {
      index,
      size,
      left: 2 + random() * 96,
      top: 3 + random() * 94,
      opacity: 0.11 + random() * 0.18,
    };
  });

  return (
    <span className={`star-field star-field-${variant}`} aria-hidden="true">
      {stars.map(({ index, size, left, top, opacity }) => (
        <i
          className="star-field-star"
          key={index}
          style={{
            left: `${left.toFixed(2)}%`,
            top: `${top.toFixed(2)}%`,
            width: `${size.toFixed(2)}px`,
            height: `${size.toFixed(2)}px`,
            opacity,
          }}
        />
      ))}
    </span>
  );
}

function SignalWindowRings({ variant }: { variant: "hero" | "diagram" }) {
  const gradientId = `windowSignal-${variant}`;
  const glowId = `windowGlow-${variant}`;

  return (
    <div className={`signal-window-rings signal-window-rings-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 420 420" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={gradientId} x1="24" y1="344" x2="438" y2="86" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#66e0ef" stopOpacity="0" />
            <stop offset="0.38" stopColor="#66e0ef" stopOpacity="0.38" />
            <stop offset="0.52" stopColor="#d6fbff" stopOpacity="1" />
            <stop offset="1" stopColor="#66e0ef" stopOpacity="0.78" />
          </linearGradient>
          <filter id={glowId} x="-30%" y="-80%" width="160%" height="260%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <path className="window-signal-scatter window-signal-scatter-a" d="M-18 376L210 210" />
        <path className="window-signal-scatter window-signal-scatter-b" d="M-18 328L210 210" />
        <path className="window-signal-scatter window-signal-scatter-c" d="M18 420L210 210" />
        <path className="window-signal-glow" d="M-18 352.5L438 67.5" filter={`url(#${glowId})`} />
        <path className="window-signal-core" d="M-18 352.5L438 67.5" stroke={`url(#${gradientId})`} />

        <circle className="window-ring window-ring-21" cx="210" cy="210" r="182" />
        <circle className="window-ring window-ring-7" cx="210" cy="210" r="116" />
        <circle className="window-ring window-ring-0" cx="210" cy="210" r="56" />

        <circle className="window-ring-node window-ring-node-0" cx="257.5" cy="180.3" r="4" />
        <circle className="window-ring-node window-ring-node-7" cx="308.4" cy="148.5" r="4" />
        <circle className="window-ring-node window-ring-node-21" cx="364.4" cy="113.5" r="4" />
        <circle className="window-core-halo" cx="210" cy="210" r="23" />
        <circle className="window-core" cx="210" cy="210" r="7" />
      </svg>
      {variant === "diagram" && (
        <>
          <span className="window-ring-label window-ring-label-0">T0</span>
          <span className="window-ring-label window-ring-label-7">T7</span>
          <span className="window-ring-label window-ring-label-21">T21</span>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Signal — наверх">
          <span className="brand-mark" aria-hidden="true" />
          <span>THE SIGNAL</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#how">Как это работает</a>
          <a href="#value">Что получает партнёр</a>
          <a href="#packages">Форматы</a>
        </nav>
        <a className="button button-small" href="#contact">
          Обсудить партнёрство
        </a>
      </header>

      <section className="hero" id="top">
        <StarField variant="hero" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-descriptor">
              <span>Talent discovery system</span>
              <em>powered by a professional quant competition</em>
            </p>
            <h1>
              Доступ к quant-талантам
              <span> с&nbsp;измеримыми результатами</span>
            </h1>
            <p className="hero-lead">
              Участники The Signal решают профессиональные quant-задачи в единых
              условиях. Партнёр видит результат, подход и код, а с согласия
              участника получает его контакт.
            </p>
            <div className="hero-actions">
              <a className="button" href="#packages">
                Выбрать формат партнёрства
              </a>
              <a className="text-link" href="#how">
                Как формируется сигнал <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="signal-stage" aria-label="Пример профиля кандидата">
            <SignalWindowRings variant="hero" />
            <div className="candidate-card">
              <div className="candidate-topline">
                <span className="status-dot" />
                <span>Candidate profile · {demoCandidate.id}</span>
                <span className="score">{demoCandidate.overallScore}</span>
              </div>
              <div className="candidate-role">
                <p>PROFILE MATCH</p>
                <h2>{demoCandidate.role}</h2>
                <span>The Signal #{Number(demoCandidate.rank)} · Industry professional</span>
              </div>
              <div className="signal-list">
                {candidateEvidence.map(({ label, score }) => (
                  <div className="signal-row" key={label}>
                    <div className="signal-label">
                      <span>{label}</span>
                      <strong>{score}</strong>
                    </div>
                    <div className="signal-bar">
                      <span style={{ width: `${score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="candidate-footer">
                <span>Reproducibility verified</span>
                <span>Profile shared by consent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem section" id="problem">
        <div className="section-label">Зачем нужен The Signal</div>
        <div className="problem-content">
          <h2>Сильного специалиста важно не только найти, но и вовремя распознать</h2>
          <p className="section-intro">
            Поиск и оценка quant-специалистов требуют времени и ресурсов.
            Практические навыки не всегда видны сразу, а за уже заметных кандидатов
            приходится конкурировать с другими компаниями.
          </p>
          <div className="problem-grid">
            <article>
              <span className="card-icon"><SignalIcon name="hidden" /></span>
              <h3>Скрытые таланты</h3>
              <p>
                В привычных каналах заметнее те, кто активно ищет работу или имеет
                узнаваемый опыт. Сильные студенты и специалисты без громких компаний
                в резюме могут оставаться вне поля зрения.
              </p>
            </article>
            <article>
              <span className="card-icon"><SignalIcon name="noise" /></span>
              <h3>Шум вместо сигнала</h3>
              <p>
                Резюме и интервью дают важный контекст, но оценка практических
                навыков требует дополнительных этапов и времени технических
                специалистов.
              </p>
            </article>
            <article>
              <span className="card-icon"><SignalIcon name="late" /></span>
              <h3>Поздний контакт</h3>
              <p>
                Когда сильный кандидат становится заметен рынку, им уже интересуются
                несколько компаний. Конкуренция за его внимание растёт, а вероятность
                найма снижается.
              </p>
            </article>
          </div>
          <aside className="market-proof" aria-labelledby="market-proof-title">
            <StarField variant="market" />
            <div className="market-proof-copy">
              <p className="market-proof-kicker">Так уже делают лидеры рынка</p>
              <h3 id="market-proof-title">
                Соревнования помогают раньше увидеть сильных кандидатов в работе
              </h3>
              <p>
                Они расширяют поле поиска, дают сравнимый практический результат и
                создают повод начать диалог на основе продемонстрированных навыков.
                Этот подход уже используют ведущие quant-фонды и трейдинговые компании.
              </p>
            </div>
            <div className="market-proof-examples" aria-label="Примеры рынка">
              <article>
                <span className="market-logo">
                  <img src="market-logos/citadel.svg" alt="Citadel" width={145} height={19} />
                </span>
                <p>
                  <strong>Datathon.</strong> Участники исследуют сложный датасет и
                  защищают свои выводы. Лучшие получают приглашение на интервью.
                </p>
              </article>
              <article>
                <span className="market-logo market-logo-worldquant">
                  <img src="market-logos/worldquant.svg" alt="WorldQuant" width={188} height={20} />
                </span>
                <p>
                  <strong>International Quant Championship.</strong> Участники создают
                  и тестируют quant-сигналы. Более 80 получили предложения о дальнейшем
                  сотрудничестве.
                </p>
              </article>
              <article>
                <span className="market-logo">
                  <img src="market-logos/imc.svg" alt="IMC" width={178} height={33} />
                </span>
                <p>
                  <strong>Prosperity.</strong> Участники решают задачи по ручному и
                  алгоритмическому трейдингу. Лучшим открывается путь к стажировкам
                  и graduate-позициям.
                </p>
              </article>
            </div>
            <p className="market-proof-note">
              Это примеры рынка, а не партнёры The Signal.
            </p>
          </aside>
        </div>
      </section>

      <section className="how section" id="how">
        <StarField variant="process" />
        <div className="section-label">Как это работает</div>
        <div className="how-content">
          <div className="section-heading-row">
            <h2>От профессиональной задачи — к подходящим кандидатам</h2>
            <p>
              Участник показывает навыки в деле, The Signal оценивает и
              структурирует результат, а партнёр получает доступ к релевантным
              кандидатам.
            </p>
          </div>
          <div className="flow">
            <article>
              <span className="flow-number">01</span>
              <p className="flow-kicker">Generate signal</p>
              <h3>Профессиональное соревнование</h3>
              <p>Участники решают практические quant-задачи в единых условиях.</p>
            </article>
            <article>
              <span className="flow-number">02</span>
              <p className="flow-kicker">Measure signal</p>
              <h3>Единая оценка</h3>
              <p>
                Автоматический score и оценка экспертов позволяют сравнить
                результаты по заранее определённым критериям.
              </p>
            </article>
            <article>
              <span className="flow-number">03</span>
              <p className="flow-kicker">Decode signal</p>
              <h3>Профиль кандидата</h3>
              <p>
                Результаты соревнования и сильные стороны участника собираются в
                единый профиль.
              </p>
            </article>
            <article>
              <span className="flow-number">04</span>
              <p className="flow-kicker">Act on signal</p>
              <h3>Контакт с кандидатами</h3>
              <p>
                Партнёр The Signal видит релевантных участников и может обсудить с
                ними вакансию, стажировку или другой формат сотрудничества.
              </p>
            </article>
          </div>
          <div className="signal-bridge" aria-label="Участник показывает навыки, The Signal подтверждает результат, партнёр выбирает кандидатов">
            <div className="signal-ray">
              <svg
                className="signal-ray-art signal-ray-art-desktop"
                viewBox="0 0 1440 420"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="signalRay" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#66e0ef" stopOpacity="0" />
                    <stop offset="0.22" stopColor="#66e0ef" stopOpacity="0.36" />
                    <stop offset="0.5" stopColor="#a4f4fb" stopOpacity="0.95" />
                    <stop offset="1" stopColor="#66e0ef" stopOpacity="0.82" />
                  </linearGradient>
                  <filter id="signalGlow" x="-20%" y="-80%" width="140%" height="260%">
                    <feGaussianBlur stdDeviation="9" />
                  </filter>
                </defs>
                <path className="signal-ray-scatter signal-ray-scatter-a" d="M-50 372L720 208" />
                <path className="signal-ray-scatter signal-ray-scatter-b" d="M-50 294L720 208" />
                <path className="signal-ray-scatter signal-ray-scatter-c" d="M-50 334L720 208" />
                <path className="signal-ray-glow" d="M-50 336L1490 80" />
                <path className="signal-ray-core" d="M-50 336L1490 80" />
                <path className="signal-ray-edge signal-ray-edge-top" d="M720 197L1490 69" />
                <path className="signal-ray-edge signal-ray-edge-bottom" d="M720 219L1490 91" />
              </svg>
              <svg
                className="signal-ray-art signal-ray-art-mobile"
                viewBox="0 0 360 610"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="signalRayMobile" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#66e0ef" stopOpacity="0.22" />
                    <stop offset="0.5" stopColor="#a4f4fb" stopOpacity="0.95" />
                    <stop offset="1" stopColor="#66e0ef" stopOpacity="0.76" />
                  </linearGradient>
                  <filter id="signalGlowMobile" x="-80%" y="-20%" width="260%" height="140%">
                    <feGaussianBlur stdDeviation="8" />
                  </filter>
                </defs>
                <path className="signal-ray-scatter signal-ray-scatter-a" d="M74 -30L175 300" />
                <path className="signal-ray-scatter signal-ray-scatter-b" d="M126 -30L175 300" />
                <path className="signal-ray-scatter signal-ray-scatter-c" d="M100 -30L175 300" />
                <path className="signal-ray-glow" d="M100 0L258 632" />
                <path className="signal-ray-core" d="M100 0L258 632" />
                <path className="signal-ray-edge signal-ray-edge-top" d="M166 302L249 634" />
                <path className="signal-ray-edge signal-ray-edge-bottom" d="M184 298L267 630" />
              </svg>

              <div className="signal-bridge-point signal-bridge-participant">
                <span className="signal-bridge-node" aria-hidden="true" />
                <div className="signal-bridge-copy">
                  <p>Участник</p>
                  <span>Показывает, что умеет</span>
                </div>
              </div>
              <div className="signal-bridge-point signal-bridge-result">
                <span className="signal-bridge-node signal-key-node" aria-hidden="true" />
                <div className="signal-bridge-copy">
                  <p>Проверенный результат</p>
                  <span>Навыки подтверждены на практике</span>
                </div>
              </div>
              <div className="signal-bridge-point signal-bridge-partner">
                <span className="signal-bridge-node" aria-hidden="true" />
                <div className="signal-bridge-copy">
                  <p>Партнёр</p>
                  <span>Выбирает подходящих кандидатов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="talent section">
        <div className="section-label">Кого увидит партнёр</div>
        <div className="talent-layout">
          <div className="talent-heading">
            <h2>От сильных студентов до специалистов индустрии</h2>
          </div>
          <div className="talent-intro">
            <p className="section-intro">
              The Signal объединит перспективных начинающих специалистов и
              профессионалов с практическим опытом в областях, востребованных
              quant-командами.
            </p>
            <div className="discipline-cloud" aria-label="Направления участников">
              {[
                "Quant Research",
                "Quant Trading",
                "Applied Mathematics",
                "Statistics",
                "Machine Learning",
                "Data Science",
                "Quant Engineering",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="talent-cards">
            <article>
              <span className="talent-icon"><SignalIcon name="student" /></span>
              <span className="talent-type">Track 01 · High-potential talent</span>
              <h3>Сильная база и высокий потенциал</h3>
              <p>
                Студенты, выпускники и начинающие специалисты с подготовкой в
                математике, статистике, программировании, machine learning и
                data science.
              </p>
            </article>
            <article>
              <span className="talent-icon"><SignalIcon name="professional" /></span>
              <span className="talent-type">Track 02 · Industry professionals</span>
              <h3>Практический опыт и профессиональная глубина</h3>
              <p>
                Специалисты в quant research, data science и engineering с опытом
                работы в индустрии, готовые подтвердить навыки результатами соревнования.
              </p>
            </article>
          </div>
          <div className="talent-signal" aria-label="План первого сезона: около половины участников по персональным приглашениям, около половины через открытое привлечение; из тысячи участников сто становятся финалистами">
            <StarField variant="talent" />
            <div className="talent-signal-label">Целевая воронка сезона</div>
            <svg className="talent-signal-art talent-signal-art-desktop" viewBox="0 0 1280 430" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="talentSignalIn" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#66e0ef" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#d6fbff" stopOpacity="0.96" />
                </linearGradient>
                <linearGradient id="talentSignalOut" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#d6fbff" stopOpacity="0.98" />
                  <stop offset="1" stopColor="#66e0ef" stopOpacity="0.74" />
                </linearGradient>
                <filter id="talentSignalGlow" x="-20%" y="-80%" width="140%" height="260%">
                  <feGaussianBlur stdDeviation="9" />
                </filter>
              </defs>
              <path className="talent-signal-scatter" d="M-20 104L650 218M-20 326L650 218" />
              <path className="talent-signal-glow" d="M-20 104L650 218L1300 172M-20 326L650 218" />
              <path className="talent-signal-in" d="M-20 104L650 218M-20 326L650 218" />
              <path className="talent-signal-edge" d="M650 210L1300 163M650 226L1300 181" />
              <path className="talent-signal-out" d="M650 218L1300 172" />
            </svg>
            <svg className="talent-signal-art talent-signal-art-mobile" viewBox="0 0 360 650" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="talentSignalInMobile" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#66e0ef" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#d6fbff" stopOpacity="0.96" />
                </linearGradient>
                <linearGradient id="talentSignalOutMobile" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#d6fbff" stopOpacity="0.98" />
                  <stop offset="1" stopColor="#66e0ef" stopOpacity="0.74" />
                </linearGradient>
                <filter id="talentSignalGlowMobile" x="-80%" y="-20%" width="260%" height="140%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
              </defs>
              <path className="talent-signal-scatter" d="M-16 142L178 365M-16 270L178 365" />
              <path className="talent-signal-glow talent-signal-glow-mobile" d="M-16 142L178 365L376 548M-16 270L178 365" />
              <path className="talent-signal-in talent-signal-in-mobile" d="M-16 142L178 365M-16 270L178 365" />
              <path className="talent-signal-edge" d="M172 371L370 554M184 359L382 542" />
              <path className="talent-signal-out talent-signal-out-mobile" d="M178 365L376 548" />
            </svg>

            <span className="talent-signal-node talent-signal-node-participants signal-key-node" aria-hidden="true" />
            <span className="talent-signal-node talent-signal-node-finalists signal-key-node" aria-hidden="true" />

            <article className="talent-source talent-source-personal">
              <span>≈50%</span>
              <h3>Персональные приглашения</h3>
              <p>Собственная база и профессиональная сеть организаторов.</p>
            </article>
            <article className="talent-source talent-source-open">
              <span>≈50%</span>
              <h3>Открытое привлечение</h3>
              <p>Пользователи Kaggle, тематические Telegram-каналы, университетские и профессиональные сообщества.</p>
            </article>
            <article className="talent-count talent-count-participants">
              <strong>1 000</strong>
              <p>участников</p>
            </article>
            <article className="talent-count talent-count-finalists">
              <strong>100</strong>
              <p>финалистов</p>
            </article>
          </div>
        </div>
      </section>

      <section className="result-preview section" id="value">
        <div className="section-label">Что получает партнёр</div>
        <div className="result-preview-head">
          <h2>От общего пула — к кандидатам под задачу партнёра</h2>
          <p>
            Партнёр получает доступ к профилям всех участников The Signal. Данные
            об опыте и специализации дополняются результатами соревнования, а фильтры
            помогают быстро находить и сравнивать подходящих кандидатов.
          </p>
        </div>

        <p className="console-disclaimer">
          Пример интерфейса. Итоговый вариант отчёта может отличаться.
        </p>

        <div className="talent-console" aria-label="Пример интерфейса для поиска и сравнения участников The Signal">
          <div className="console-topbar">
            <div>
              <span className="console-mark" aria-hidden="true" />
              <strong>THE SIGNAL / TALENT CONSOLE</strong>
            </div>
            <span>Пример интерфейса</span>
          </div>

          <div className="console-body">
            <aside className="console-filter-panel">
              <div className="console-step">
                <span>01</span>
                <div><strong>Найти</strong><p>Задайте параметры поиска</p></div>
              </div>

              <label className="console-search">
                <span>Поиск</span>
                <input type="text" value="Quant Research" readOnly aria-label="Поиск по роли" />
              </label>

              <div className="console-filter-group">
                <span>Track</span>
                <button type="button" className="active">Industry professionals</button>
                <button type="button">High-potential</button>
              </div>
              <div className="console-filter-group">
                <span>Специализация</span>
                <button type="button" className="active">Quant Research</button>
                <button type="button">Applied ML</button>
              </div>
              <div className="console-filter-group">
                <span>Опыт</span>
                <button type="button" className="active">3+ years</button>
                <button type="button">Any experience</button>
              </div>
              <div className="console-filter-group">
                <span>Результат</span>
                <button type="button" className="active">Top 10%</button>
                <button type="button">All scores</button>
              </div>
            </aside>

            <aside className="talent-pool-preview">
              <div className="element-callout callout-pool">
                <div><strong>Доступ к talent pool</strong><p>Профили всех участников</p></div>
              </div>
              <div className="console-step">
                <span>02</span>
                <div><strong>Сравнить</strong><p>Сопоставьте кандидатов</p></div>
              </div>
              <div className="pool-preview-head">
                <div>
                  <span>Talent pool</span>
                  <h3>The Signal Pool</h3>
                </div>
                <strong>1 000</strong>
              </div>
              <div className="pool-list">
                {sampleTalentPool.map((candidate) => (
                  <article className={candidate.selected ? "selected" : ""} key={candidate.id}>
                    <span className="pool-rank">#{candidate.rank}</span>
                    <div>
                      <strong>{candidate.id}</strong>
                      <p>{candidate.focus}</p>
                    </div>
                    <span className="pool-score">{candidate.score}</span>
                  </article>
                ))}
              </div>
              <p className="pool-preview-note">
                Имя и контакты открываются в соответствии с Signal Window партнёра
                и только с согласия участника.
              </p>
            </aside>

            <div className="candidate-profile-preview">
              <div className="console-step console-step-profile">
                <span>03</span>
                <div><strong>Выбрать</strong><p>Изучите профиль и добавьте в shortlist</p></div>
              </div>
              <div className="candidate-profile-head">
                <div>
                  <span className="profile-id">Candidate profile · {demoCandidate.id}</span>
                  <h3>{demoCandidate.role}</h3>
                  <div className="profile-tags">
                    <span>Industry professional</span>
                    <span>4+ years experience</span>
                    <span className="contact-ready">Ready for contact</span>
                  </div>
                </div>
                <div className="profile-rank">
                  <strong>#{demoCandidate.rank}</strong>
                  <span>overall rank · score {demoCandidate.overallScore}</span>
                  <button type="button" className="shortlist-button">+ Shortlist</button>
                </div>
              </div>

              <div className="profile-signal-summary">
                <div className="element-callout callout-score">
                  <div><strong>Сравнимый score</strong><p>Результаты двух этапов</p></div>
                </div>
                <article>
                  <span>Signal score</span>
                  <strong>{demoCandidate.overallScore}</strong>
                  <p>#{Number(demoCandidate.rank)} overall · {demoCandidate.percentile}</p>
                </article>
                <article>
                  <span>Open Challenge</span>
                  <strong>{demoCandidate.openScore}</strong>
                  <p>Private score</p>
                </article>
                <article>
                  <span>Research Challenge</span>
                  <strong>{demoCandidate.researchScore}</strong>
                  <p>Средняя экспертная оценка</p>
                </article>
              </div>

              <div className="profile-evidence-grid">
                <div className="element-callout callout-evidence">
                  <div><strong>Подтверждение навыков</strong><p>Код, отчёт и экспертные оценки</p></div>
                </div>
                <div className="assessment-preview">
                  <div className="profile-panel-title">
                    <div>
                      <span>Skill evidence</span>
                      <h4>Что стоит за Signal score {demoCandidate.overallScore}</h4>
                    </div>
                    <span>3 expert reviews</span>
                  </div>
                  <div className="assessment-bars">
                    {candidateEvidence.map(({ label, score }) => (
                      <div className="assessment-row" key={label}>
                        <div><span>{label}</span><strong>{score}</strong></div>
                        <div className="assessment-track"><span style={{ width: `${score}%` }} /></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="integrity-preview">
                  <div className="profile-panel-title">
                    <div>
                      <span>Verification</span>
                      <h4>Доверие к результату</h4>
                    </div>
                  </div>
                  <ul>
                    <li><span aria-hidden="true">✓</span><div><strong>Reproducibility verified</strong><p>Результат воспроизводится в контрольной среде.</p></div></li>
                    <li><span aria-hidden="true">✓</span><div><strong>Code originality checked</strong><p>Решение прошло контроль заимствований.</p></div></li>
                    <li><span aria-hidden="true">✓</span><div><strong>Expert agreement</strong><p>Существенных расхождений между оценками нет.</p></div></li>
                  </ul>
                </div>
              </div>

              <div className="hiring-insight">
                <div className="element-callout callout-insight">
                  <div><strong>Hiring insight</strong><p>Вывод и рекомендация для интервью</p></div>
                </div>
                <div>
                  <span>Hiring insight</span>
                  <p>
                    {Number(demoCandidate.rank)}-е место в общем рейтинге и сильный
                    результат на обоих этапах.
                    Кандидат ясно формулирует ограничения модели, аккуратно работает
                    с риском и пишет воспроизводимый код. Рекомендуем приоритетное
                    интервью на Quant Research и Applied ML роли.
                  </p>
                </div>
                <div className="profile-artifacts" aria-label="Материалы профиля">
                  <span>Research report</span>
                  <span>Notebook &amp; code</span>
                  <span>Expert reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why section" id="trust">
        <StarField variant="trust" />
        <div className="section-label">Как подтверждаются данные</div>
        <div className="why-grid">
          <div className="why-intro">
            <h2>Партнёр видит, на чём основана оценка каждого кандидата</h2>
            <p>
              Информация в профиле не смешивается: отдельно показано, что участник
              указал о себе, что измерено в единых условиях соревнования и что
              дополнительно проверено экспертами.
            </p>
            <div className="why-conclusion">
              Каждый вывод можно связать с конкретным результатом соревнования или
              экспертной оценкой.
            </div>
          </div>
          <div className="trust-levels" aria-label="Уровни подтверждения данных о кандидате">
            <article className="trust-level trust-level-profile">
              <div className="trust-node" aria-hidden="true"><span /></div>
              <div className="trust-level-content">
                <span className="trust-status">Указано участником</span>
                <h3>Профессиональный профиль</h3>
                <p>
                  Опыт, специализация и карьерные интересы помогают искать релевантных
                  кандидатов. Эти данные не выдаются за независимо подтверждённый результат.
                </p>
              </div>
            </article>
            <article className="trust-level trust-level-measured">
              <div className="trust-node" aria-hidden="true"><span /></div>
              <div className="trust-level-content">
                <span className="trust-status">Измерено</span>
                <h3>Сравнимый score</h3>
                <p>
                  Все валидные решения Open Challenge оцениваются на Kaggle в единых
                  условиях по заранее определённой метрике. Автоматический score позволяет
                  объективно сравнивать результаты участников.
                </p>
              </div>
            </article>
            <article className="trust-level trust-level-verified">
              <div className="trust-node" aria-hidden="true"><span /></div>
              <div className="trust-level-content">
                <span className="trust-status">Проверено экспертами</span>
                <h3>Экспертная оценка финалистов</h3>
                <p>
                  Код и research report 100 финалистов независимо оценивают не менее
                  двух экспертов по единым критериям. При существенном расхождении
                  подключается третий эксперт.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="season section" id="season">
        <div className="section-label">Первый сезон</div>
        <div className="season-heading">
          <h2>За шесть месяцев — от разработки задания до проверенного talent pool</h2>
        </div>
        <div className="timeline" aria-label="План первого сезона с ноября 2026 по апрель 2027">
          <div className="timeline-competition-zone" aria-hidden="true">
            <span>Соревнование</span>
          </div>
          {seasonStages.map((stage, index) => (
            <article
              key={stage.title}
              className={index >= 2 ? `timeline-stage-competition${index === 2 ? " timeline-stage-competition-first" : ""}` : undefined}
            >
              {index === 2 && (
                <span className="timeline-phase-mobile" aria-hidden="true">
                  Соревнование
                </span>
              )}
              <p className="timeline-date">{stage.date}</p>
              <span
                className={`timeline-marker${stage.title === "Экспертная оценка и доступ" ? " signal-key-node" : ""}`}
                aria-hidden="true"
              />
              <h3>{stage.title}</h3>
              <p className="timeline-description">{stage.description}</p>
              <p className="timeline-detail">
                <strong>{stage.detailLabel}</strong>
                {stage.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="packages section" id="packages">
        <div className="packages-heading">
          <div>
            <div className="section-label">Форматы партнёрства</div>
            <h2>Один talent pool — три скорости доступа</h2>
          </div>
          <p>
            Все партнёры получают единый статус <strong>Official Talent Partner
            of The Signal</strong> и работают с одним и тем же talent pool. Главное различие —
            момент открытия Signal Window: чем раньше доступ, тем быстрее можно начать
            работу с сильнейшими кандидатами.
          </p>
        </div>

        <div className="package-comparison">
          <div className="comparison-scroll">
            <table aria-label="Сравнение форматов партнёрства The Signal">
              <thead>
                <tr>
                  <th className="comparison-guide" scope="col">
                    <span>Скорость доступа</span>
                    <strong>Скорость становится преимуществом</strong>
                    <p>
                      Более раннее окно сокращает путь от результата соревнования
                      до первого контакта с кандидатом.
                    </p>
                    <SignalWindowRings variant="diagram" />
                    <small>
                      <b>Один и тот же talent pool.</b> Меняются момент доступа
                      и глубина hiring-сопровождения.
                    </small>
                  </th>
                  {packageOptions.map((option) => (
                    <th className={`comparison-package comparison-package-${option.name.toLowerCase()}`} scope="col" key={option.name}>
                      <span className="comparison-package-name">{option.window}</span>
                      <span className="comparison-package-meta">
                        <span className="comparison-package-code">{option.name}</span>
                        <span className="comparison-package-price">{option.price}</span>
                      </span>
                      <span className="comparison-access-moment">{option.accessMoment}</span>
                      <span className="comparison-access-note">{option.accessNote}</span>
                      <strong className="comparison-purpose">{option.purpose}</strong>
                      <span className="comparison-fit">{option.fit}</span>
                      <a className="comparison-link" href="#contact">Обсудить формат</a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageComparison.map((row) => (
                  <tr className={row.common ? "comparison-common-row" : ""} key={row.feature}>
                    <th scope="row">
                      {row.feature}
                      {row.note && <span>{row.note}</span>}
                    </th>
                    <td>{row.t0}</td>
                    <td>{row.t7}</td>
                    <td>{row.t21}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="package-note">
          Стоимость участия в первом сезоне указана в долларах США. Налоги,
          график оплаты и финальный объём сервисов фиксируются в коммерческом предложении.
        </p>
      </section>

      <section className="faq section">
        <div className="section-label">До подписания</div>
        <div className="faq-layout">
          <div className="faq-intro">
            <h2>Юридические и операционные вопросы — без мелкого шрифта</h2>
            <p>
              Здесь зафиксированы базовые правила проекта. Конкретные объёмы,
              реквизиты и применимые юридические условия закрепляются в договоре.
            </p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>Какие персональные данные получает партнёр?</summary>
              <p>
                Только данные участников, которые отдельно согласились передать
                профиль и контакты компаниям-партнёрам. Перечень полей, цель обработки,
                срок хранения и география передачи фиксируются до открытия доступа —
                в правилах участия, privacy notice и договоре с партнёром.
              </p>
            </details>
            <details>
              <summary>Можно ли передавать контакты третьим лицам?</summary>
              <p>
                Доступ предоставляется для согласованной recruiting-задачи партнёра.
                Перепродажа базы, передача за пределы согласованной команды и использование
                данных для несвязанных целей не предполагаются. Более широкое использование
                требует отдельного правового основания и, когда необходимо, нового согласия.
              </p>
            </details>
            <details>
              <summary>Когда именно открывается доступ и есть ли эксклюзивность?</summary>
              <p>
                T0 открывается после утверждения итогового рейтинга — за 48 часов
                до публичного объявления. T7 и T21 отсчитываются от дня объявления.
                Эксклюзивности нет: все форматы получают профили и результаты
                участников, но в разное время и с разной глубиной сопровождения.
              </p>
            </details>
            <details>
              <summary>Как исключается конфликт интересов при оценке?</summary>
              <p>
                Open Challenge оценивается автоматически. Работы Research Challenge
                проверяют не менее двух экспертов по единой методике; при существенном
                расхождении подключается третий. Данные для контакта не влияют на score,
                а партнёрские окна открываются только после утверждения рейтинга.
              </p>
            </details>
            <details>
              <summary>Получает ли партнёр права на код и решения участников?</summary>
              <p>
                Просмотр работы или Candidate Report не означает автоматическую
                передачу интеллектуальных прав и не даёт права копировать код, модель
                или research для коммерческого использования. Такой сценарий требует
                отдельного письменного соглашения с правообладателем.
              </p>
            </details>
            <details>
              <summary>Что происходит, если кандидат не отвечает или отказывается?</summary>
              <p>
                Согласие позволяет передать профиль и начать контакт, но не обязывает
                участника проходить интервью или принимать предложение. The Signal
                квалифицирует пул и снижает неопределённость первичного отбора, но не
                гарантирует ответ, интервью или найм.
              </p>
            </details>
            <details>
              <summary>Кто отвечает за организацию и методологию?</summary>
              <p>
                The Signal и Intella выступают соорганизаторами и координируют
                привлечение участников, платформу, партнёрский доступ и операционный
                процесс. Задания и методику оценки разрабатывают независимые эксперты
                вместе с экспертами партнёров. Договорное лицо и реквизиты фиксируются
                в документах конкретного партнёрства.
              </p>
            </details>
            <details>
              <summary>Что фиксируется в коммерческом предложении и договоре?</summary>
              <p>
                Цена в долларах США, налоги, график оплаты, Signal Window, состав
                shortlist и Candidate Reports, формат участия в жюри и открытии,
                доступные материалы, правила конфиденциальности и обработки данных.
                Подписанные условия не меняются из-за последующих обновлений лендинга.
              </p>
            </details>
            <details>
              <summary>Что будет, если календарь соревнования изменится?</summary>
              <p>
                T0 остаётся привязан к утверждению рейтинга и открывается за 48 часов
                до объявления; T7 и T21 считаются от фактической даты публичного
                объявления. Существенные изменения календаря и состава deliverables
                согласуются с партнёром письменно.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <StarField variant="contact" />
        <div className="contact-layout">
          <div className="section-label">Обсудить партнёрство</div>
          <div className="contact-panel">
            <div className="contact-heading">
              <h2>Find the signal.<br /><span>Hire the edge.</span></h2>
            </div>
            <div className="contact-inner">
              <h3>Обсудим, какой сигнал нужен вашей команде</h3>
              <p>
                Сверим hiring-задачу, целевые профили и желаемую скорость доступа — и
                предложим подходящий формат участия в первом сезоне.
              </p>
              <div className="contact-actions">
                <span className="button button-disabled">Контакт будет добавлен</span>
                <span className="contact-note">Нужны email, Telegram или ссылка на встречу</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <StarField variant="footer" />
        <a className="brand" href="#top"><span className="brand-mark" />THE SIGNAL</a>
        <span>Talent discovery system · Partner program</span>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
