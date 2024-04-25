import './style.css'
import Sidebar from '@/components/Sidebar'

export default async function RootLayout({
  children
}) {
  
  return (
    <html lang='en'>
      <body>
        <div className='container'>
          <div className='main'>
            <Sidebar />
            <section className="col note-viewr">{children}</section>
          </div>
        </div>
      </body>

    </html>
  )
}