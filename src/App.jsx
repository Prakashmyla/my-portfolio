export default function PortfolioWebsite() {
  const projects = [
    {
      title: "AlphaSync Bio",
      subtitle: "EEG-based vigilance and fatigue biomarker analysis",
      bullets: [
        "EEG preprocessing and feature extraction pipeline using MATLAB/EEGLAB",
        "Estimated vigilance using spectral EEG features aligned with PERCLOS labels",
        "Built for neuroergonomic and safety-critical monitoring applications",
      ],
    },
    {
      title: "Neural Switching System",
      subtitle: "16-channel stimulation and recording interface",
      bullets: [
        "16-channel relay-based routing architecture for stimulation and recording",
        "MCU-controlled sequencing for safe channel selection and timing",
        "Protection logic to isolate amplifier paths during stimulation",
      ],
    },
    {
      title: "Neonatal Chest Motion and Skin Temperature Monitoring",
      subtitle: "Chest movement and skin micro-climate sensing using MPU6050 and AHT10",
      bullets: [
        "Sensor acquisition using MPU6050 motion data and AHT10 temperature/humidity data",
        "Timestamped physiological and motion datasets for rest and movement conditions",
        "Embedded data logging pipeline using Arduino MKR WAN 1310",
      ],
    },
    {
      title: "AEGIS Safety Stack",
      subtitle: "Multimodal vehicle crash response architecture",
      bullets: [
        "Pipeline from sensing to injury severity inference and reporting",
        "Human-centered safety operations and post-crash guidance",
        "Designed for resilient multi-device failover",
      ],
    },
    {
      title: "Acoustic Heart Rate Detection",
      subtitle: "ESP32 + INMP441 edge inference system",
      bullets: [
        "Real-time heartbeat sensing using I2S microphone input",
        "Embedded logistic regression classification with >92% reported accuracy",
        "On-device processing with live OLED feedback",
      ],
    },
  ];

  const skills = [
    "Embedded Systems",
    "ESP32 / Arduino",
    "FreeRTOS",
    "MATLAB",
    "Python",
    "Biomedical Signal Processing",
    "EEG / Heartbeat / Respiration",
    "Neural Interfaces",
    "EEGLAB / MNE",
    "Circuit Design",
    "Edge AI",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.9fr] md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              Embedded Systems • Biomedical Signal Processing • Neurotechnology
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Gnana Prakash
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              I build embedded sensing and signal-processing systems for
              biomedical, neural, and safety-critical applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Gnana_Prakash_Resume.pdf"
                download
                className="rounded-2xl border border-green-500 px-5 py-3 text-sm font-medium text-green-400 transition hover:bg-green-500 hover:text-black"
              >
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/gnana-prakash-a269a91b9"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-900"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Prakashmyla"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-900"
              >
                GitHub
              </a>

              <a
                href="mailto:gmyla@uab.edu"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/30">
            <h2 className="text-lg font-semibold">Core Focus</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">About</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            I am an Electrical and Computer Engineering graduate focused on
            embedded systems, neural interfaces, physiological sensing, and
            biomedical signal processing. My work spans EEG-based vigilance
            estimation, neural stimulation/recording switching, wearable
            respiratory monitoring, and safety-focused sensing systems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Featured Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Projects
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Project
              </p>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{project.subtitle}</p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-semibold">Experience Snapshot</h2>
            <div className="mt-5 space-y-5 text-sm leading-6 text-slate-300">
              <div>
                <p className="font-medium text-slate-100">
                  Volunteer Researcher
                </p>
                <p className="text-slate-400">
                  Neural Signal Processing and Modeling Lab, UAB
                </p>
                <p className="mt-2">
                  Working on EEG vigilance estimation, PERCLOS-aligned
                  biomarker analysis, spectral feature extraction, and
                  reliability-aware signal processing.
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-100">
                  Volunteer Graduate Researcher
                </p>
                <p className="text-slate-400">ANRY Lab, UAB</p>
                <p className="mt-2">
                  Designed neural stimulation/recording switching architecture,
                  embedded control logic, and timing-safe channel routing for
                  research applications.
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-100">Teaching Assistant</p>
                <p className="text-slate-400">
                  Department of Electrical and Computer Engineering, UAB
                </p>
                <p className="mt-2">
                  Supported undergraduate engineering coursework, lab sessions,
                  debugging, and technical guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-5 space-y-3 text-slate-300">
              <p>Email: gmyla@uab.edu</p>
              <p>Location: Birmingham, AL</p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/gnana-prakash-a269a91b9"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  linkedin.com/in/gnana-prakash-a269a91b9
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/Prakashmyla"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  github.com/Prakashmyla
                </a>
              </p>
              <p>
                Resume:{" "}
                <a
                  href="/Gnana_Prakash_Resume.pdf"
                  download
                  className="underline"
                >
                  Download Resume
                </a>
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              This site is built as a clean project-facing portfolio for PhD
              outreach, engineering applications, and technical networking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
