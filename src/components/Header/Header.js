import React from 'react'

const Header = () => {
    return (
        <div>
            <section>
                <div class="max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-3xl mx-auto text-center">
                        <h1
                            class="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        >
                            Ravenous
                        </h1>

                        <p class="max-w-xl mx-auto mt-6 text-lg">
                            A site to satisfy your hunger cravings, search for your nearest restaurant
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
