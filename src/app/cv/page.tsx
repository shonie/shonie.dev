export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-900 font-sans">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Oleksandr Starnikov</h1>
        <h2 className="text-lg">Technical Lead</h2>
        <p className="text-blue-600">
          <a
            href="https://www.linkedin.com/in/shonie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/shonie
          </a>
        </p>
      </header>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">Experience</h3>
        <div className="mt-4">
          <h4 className="font-bold">Technical Lead — [Company Name]</h4>
          <p className="text-sm text-gray-700">[Location, Dates]</p>
          <ul className="list-disc list-inside mt-2">
            <li>Led development of scalable solutions for [description].</li>
            <li>
              Managed a team of X engineers, focusing on clean architecture and
              DevOps excellence.
            </li>
            <li>
              Implemented CI/CD workflows using [tools], reducing deployment
              time by X%.
            </li>
          </ul>
        </div>
        {/* Repeat for other roles */}
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">Skills</h3>
        <ul className="list-disc list-inside mt-2">
          <li>JavaScript, TypeScript, Node.js</li>
          <li>React, Next.js, Tailwind CSS</li>
          <li>AWS, Docker, CI/CD, Serverless</li>
          <li>PostgreSQL, Redis, Kafka</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">Education</h3>
        <p>Bachelor of Computer Science — [University Name]</p>
        <p className="text-sm text-gray-700">[Location, Year]</p>
      </section>

      <footer className="mt-10 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Oleksandr Starnikov</p>
      </footer>
    </div>
  );
}
