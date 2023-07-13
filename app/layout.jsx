import '@/styles/globals.css';
import SlideBar from '@/components/SlideBar';

function RootLayout({ children }) {
    return (
      <html lang='en'>
        <body >
            <div className='main'>
              <div className='gradient'>
              </div>
            </div>
            <main className='app'>
                <SlideBar />
                <div className='w-full h-full'>{children}</div>
            </main>
        </body>
      </html>
    )
  }
  

export default RootLayout