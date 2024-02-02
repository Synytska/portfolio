import Header from "../modules/header/Header"
import Footer from "../modules/footer/Footer"

export const BaseLayout = ({ children }: { children: any }) => {
    return (
        <div className="border border-blackM px-6 md:px-8 lg:px-10">
            <div className="w-full max-w-7xl mx-auto my-0">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}