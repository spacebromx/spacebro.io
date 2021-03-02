import Header from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto text-white font-sf">
      <>
        <h1 className="hidden">Alan Medina - spacebro | Software Engineer</h1>
        <Header />
        {children}
      </>
    </div>
  )
}
