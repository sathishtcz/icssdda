import React from 'react'
import { Helmet } from 'react-helmet'

export default function Helmetcomponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Conference, Software Systems Development, Data Analysis, ICSSDA, Software Engineering, Machine Learning, Artificial Intelligence, Cloud Computing, Big Data, Intelligent Systems, Research Conference, Academic Conference, Technology Conference" />
            <meta name="description" content="Join the International Conference on Software Systems Development and Data Analysis to explore cutting-edge research in software engineering, data analysis, AI, machine learning, cloud computing, big data, and intelligent systems. Network with global experts, researchers, and industry leaders." />
            <meta name="author" content="ICSSDDA Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Software Systems Development and Data Analysis" />
            <meta property="og:description" content="Join the International Conference on Software Systems Development and Data Analysis to explore cutting-edge research in software engineering, data analysis, AI, machine learning, cloud computing, big data, and intelligent systems. Network with global experts, researchers, and industry leaders." />
            <meta property="og:url" content="https://icssdda.com/" />
            <meta property="og:image" content="https://icssdda.com/assets/images/logo.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icssdda.com/assets/images/Fav.png" />

        </Helmet>
    )
}

