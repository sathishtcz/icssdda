import React from 'react'

export default function Keyinvitees() {
    return (
        <>
            <section className="py-15 pt-23 md:py-25 bg-gradient-to-b from-purple-50 to-indigo-50 relative">
                <div className="absolute inset-0 bg-[url('/assets/images/invitees.png')] opacity-5 bg-cover bg-center"></div>

                <div className="container mx-auto relative z-10">
                    <h2 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">Key Invitees</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-12">
                        {[
                            { img: '/assets/images/avator1.png', name: 'Name', position: 'Position', location: 'Chennai, India' },
                            { img: '/assets/images/avator2.png', name: 'Name', position: 'Position', location: 'Chennai, India' },
                            { img: '/assets/images/avator3.png', name: 'Name', position: 'Position', location: 'Chennai, India' },
                        ].map((invitee, idx) => (
                            <div
                                key={idx}
                                className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        alt={invitee.name}
                                        src={invitee.img}
                                        className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-3xl md:text-xl xl:text-3xl font-semibold mb-2 text-indigo-900 text-center">{invitee.name}</h2>
                                    <p className="text-xl md:text-base xl:text-xl text-indigo-700 mb-1 text-center">{invitee.position}</p>
                                    <p className="text-purple-600 font-medium text-md md:text-sm xl:text-base text-center">{invitee.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
