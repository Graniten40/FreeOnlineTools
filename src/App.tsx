import './App.css'

type Tool = {
  title: string
  description: string
  status: 'Live' | 'Coming soon'
  url: string
}

const tools: Tool[] = [
  {
    title: 'Free Barcode Generator',
    description:
      'Create free barcodes online in seconds. Simple, fast, and easy to use directly in your browser.',
    status: 'Live',
    url: 'https://barcode-generator-v2.pages.dev/',
  },
  {
    title: 'Free QR Code Generator',
    description:
      'Generate QR codes for links, text, email, WiFi, phone numbers, and more.',
    status: 'Live',
    url: 'https://qr-code-tools.pages.dev/',
  },
  {
    title: 'Free Invoice Generator',
    description:
      'Create simple invoices and export them as PDF directly from your browser.',
    status: 'Coming soon',
    url: '#',
  },
  {
    title: 'VAT Calculator',
    description:
      'Calculate VAT, remove VAT, and convert prices including or excluding tax.',
    status: 'Coming soon',
    url: '#',
  },
]

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Free Online Tools</p>

        <h1>Free Online Tools for Barcodes, QR Codes, Invoices and VAT</h1>

        <p className="heroText">
          Create barcodes, generate QR codes, make simple invoices and calculate
          VAT directly in your browser. Fast, free, and no account required.
        </p>

        <div className="heroActions">
          <a href="#tools" className="primaryButton">
            View Tools
          </a>
        </div>
      </section>

      <section id="tools" className="toolsSection">
        <div className="sectionHeader">
          <h2>Available Free Online Tools</h2>
          <p>
            Choose a free browser-based tool below. More useful tools will be
            added over time.
          </p>
        </div>

        <div className="toolsGrid">
          {tools.map((tool) => (
            <article className="toolCard" key={tool.title}>
              <div className="cardTop">
                <h3>{tool.title}</h3>

                <span
                  className={
                    tool.status === 'Live' ? 'badge live' : 'badge soon'
                  }
                >
                  {tool.status}
                </span>
              </div>

              <p>{tool.description}</p>

              {tool.status === 'Live' ? (
                <a
                  href={tool.url}
                  className="toolButton"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${tool.title}`}
                >
                  Open Tool
                </a>
              ) : (
                <button className="toolButton disabled" disabled>
                  Coming Soon
                </button>
              )}
            </article>
          ))}
        </div>

        <div className="seoText">
          <h2>Free tools that work directly in your browser</h2>

          <p>
            This collection of free online tools is built for simple everyday
            tasks. You can create barcodes, generate QR codes, calculate VAT,
            and soon create printable invoices without creating an account.
          </p>

          <p>
            The tools are designed to be fast, mobile-friendly, and easy to use
            on both desktop and phone.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Free Online Tools. Built for speed,
          simplicity, and everyday use.
        </p>
      </footer>
    </main>
  )
}

export default App