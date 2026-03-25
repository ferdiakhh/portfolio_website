/**
 * Projects data — shared between Projects page and Project Detail page
 * Updated with bilingual support objects {id, en}
 */
export const projectsData = [
    {
        slug: 'halmall-ecosystem',
        title: { id: 'Halmall Ecosystem', en: 'Halmall Ecosystem' },
        category: { id: 'Mobile App', en: 'Mobile App' },
        categoryTag: 'mobile',
        number: '01',
        description: {
            id: `<p class="desc-intro">Platform marketplace terkurasi yang dirancang untuk melayani ekosistem industri Halal di <strong>PT. HNI</strong>, dibangun untuk menangani alur transaksi kompleks dan manajemen multi-merchant.</p>

<div class="desc-highlights">
    <h4 class="desc-highlights__title">🏗️ Engineering Highlights</h4>
    <ul class="desc-highlights__list">
        <li><strong>Monorepo Architecture (Melos)</strong> — Menyatukan codebase untuk aplikasi Customer dan Merchant, memangkas redundansi kode hingga 40%.</li>
        <li><strong>Predictable State Management</strong> — Mengimplementasikan Cubit & Freezed untuk memastikan type safety ketat dan data model tanpa boilerplate.</li>
        <li><strong>Secure Networking Layer</strong> — Merancang custom Dio client dengan interceptor untuk seamless JWT token refresh dan centralized error handling.</li>
    </ul>
</div>

<div class="desc-capabilities">
    <h4 class="desc-highlights__title">📱 Key Capabilities</h4>
    <ul class="desc-highlights__list">
        <li><strong>Secure Authentication</strong> — Integrasi OAuth2 & biometrics flow.</li>
        <li><strong>Dynamic Transaction</strong> — Menangani logika checkout multi-item yang kompleks.</li>
        <li><strong>Real-time Updates</strong> — Sinkronisasi status tracking pesanan.</li>
    </ul>
</div>`,
            en: `<p class="desc-intro">A curated marketplace platform designed to serve the Halal industry ecosystem at <strong>PT. HNI</strong>, built to handle complex transaction flows and multi-merchant management.</p>

<div class="desc-highlights">
    <h4 class="desc-highlights__title">🏗️ Engineering Highlights</h4>
    <ul class="desc-highlights__list">
        <li><strong>Monorepo Architecture (Melos)</strong> — Unified codebases for Customer and Merchant apps, reducing code redundancy by 40%.</li>
        <li><strong>Predictable State Management</strong> — Implemented Cubit & Freezed to ensure strict type safety and zero-boilerplate data models.</li>
        <li><strong>Secure Networking Layer</strong> — Architected a custom Dio client with interceptors for seamless JWT token refreshment and centralized error handling.</li>
    </ul>
</div>

<div class="desc-capabilities">
    <h4 class="desc-highlights__title">📱 Key Capabilities</h4>
    <ul class="desc-highlights__list">
        <li><strong>Secure Authentication</strong> — Integrated OAuth2 & biometrics flow.</li>
        <li><strong>Dynamic Transaction</strong> — Handling complex multi-item checkout logic.</li>
        <li><strong>Real-time Updates</strong> — Order tracking status synchronization.</li>
    </ul>
</div>`
        },
        techStack: ['Flutter', 'Melos', 'Dio', 'Cubit', 'Clean Architecture'],
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
        images: ['/images/projects/halmall_bg.png'],
        mockupStyle: 'tilted',
        mockups: [
            '/images/projects/halmall/home.png',
            '/images/projects/halmall/list_product.png',
            '/images/projects/halmall/detail_product.png',
            '/images/projects/halmall/checkout.png',
            '/images/projects/halmall/payment.png'
        ],
        playStoreLink: 'https://play.google.com/store/apps/details?id=id.halmall.id'
    },
    {
        slug: 'hniid-mobile',
        title: { id: 'HNI.id Mobile', en: 'HNI.id Mobile' },
        category: { id: 'Mobile App', en: 'Mobile App' },
        categoryTag: 'mobile',
        number: '02',
        description: {
            id: `<p class="desc-intro">Berkontribusi pada pengembangan <strong>HNI.id</strong>, platform e-commerce berskala besar yang melayani pasar Halal nasional. Aplikasi ini menghubungkan ribuan pengguna aktif dengan katalog produk komprehensif mulai dari herbal hingga produk gaya hidup.</p>

<div class="desc-highlights">
    <h4 class="desc-highlights__title">⚙️ Technical Highlights</h4>
    <ul class="desc-highlights__list">
        <li><strong>Complex Logistics Routing</strong> — Menangani rendering data dinamis untuk menghubungkan pengguna dengan 20+ Sub-Warehouse nasional, memastikan ketersediaan stok dan kalkulasi pengiriman yang akurat.</li>
        <li><strong>Loyalty System Integration</strong> — Merekayasa sinkronisasi real-time untuk data Point Value (PV) dan Agent Virtual Office (AVO), memastikan tracking reward yang aman dan presisi di setiap transaksi.</li>
        <li><strong>Robust Checkout Flow</strong> — Mengembangkan arsitektur checkout yang aman dan scalable, mendukung beragam metode pembayaran termasuk workflow Cash on Delivery (COD) yang aman.</li>
    </ul>
</div>

<div class="desc-capabilities">
    <h4 class="desc-highlights__title">📱 Key Capabilities</h4>
    <ul class="desc-highlights__list">
        <li>Penemuan produk multi-kategori.</li>
        <li>Ekosistem pendaftaran agen (RAO) terintegrasi.</li>
        <li>Tracking pesanan dan poin secara real-time.</li>
    </ul>
</div>`,
            en: `<p class="desc-intro">Contributed to the development of <strong>HNI.id</strong>, a large-scale e-commerce platform serving the nationwide Halal marketplace. The app bridges thousands of active users with comprehensive product catalogs ranging from herbal to lifestyle goods.</p>

<div class="desc-highlights">
    <h4 class="desc-highlights__title">⚙️ Technical Highlights</h4>
    <ul class="desc-highlights__list">
        <li><strong>Complex Logistics Routing</strong> — Handled dynamic data rendering to connect users seamlessly with 20+ national Sub-Warehouses, ensuring accurate stock availability and shipping calculations.</li>
        <li><strong>Loyalty System Integration</strong> — Engineered the real-time synchronization of Point Value (PV) and Agent Virtual Office (AVO) data, ensuring secure and precise reward tracking for every transaction.</li>
        <li><strong>Robust Checkout Flow</strong> — Developed a secure and scalable checkout architecture supporting diverse payment methods, including secure Cash on Delivery (COD) workflows.</li>
    </ul>
</div>

<div class="desc-capabilities">
    <h4 class="desc-highlights__title">📱 Key Capabilities</h4>
    <ul class="desc-highlights__list">
        <li>Multi-category product discovery.</li>
        <li>Integrated agent registration (RAO) ecosystem.</li>
        <li>Real-time order and point tracking.</li>
    </ul>
</div>`
        },
        techStack: ['Flutter', 'Dart', 'Freezed', 'Cubit', 'Dio', 'Melos', 'REST API', 'JWT'],
        gradient: 'linear-gradient(135deg, #00A651 0%, #0a0a0a 100%)',
        images: ['/images/projects/hniid_bg.png'],
        mockupStyle: 'tilted',
        mockups: [
            '/images/projects/hniid/Screenshot_20260226_143828.jpg',
            '/images/projects/hniid/Screenshot_20260226_143834.jpg',
            '/images/projects/hniid/Screenshot_20260226_143841.jpg',
            '/images/projects/hniid/Screenshot_20260226_143854.jpg',
            '/images/projects/hniid/Screenshot_20260226_143915.jpg'
        ],
        playStoreLink: 'https://play.google.com/store/apps/details?id=id.hni.mobile&pcampaignid=web_share'
    },
    {
        slug: 'vocasia-elearning',
        title: { id: 'Vocasia E-Learning', en: 'Vocasia E-Learning' },
        category: { id: 'Mobile App', en: 'Mobile App' },
        categoryTag: 'mobile',
        number: '03',
        description: {
            id: `<p class="desc-intro">Mengembangkan aplikasi mobile <strong>Vocasia</strong> e-learning resmi dari nol. Bertanggung jawab dalam penulisan core business logic, menerjemahkan desain UI/UX menjadi widget interaktif, serta mengintegrasikan API kompleks untuk membangun lingkungan belajar digital yang seamless.</p>

<div class="desc-highlights">
    <h4 class="desc-highlights__title">⚙️ Core Features & Technical Implementation</h4>
    <ul class="desc-highlights__list">
        <li><strong>Video Playback Optimization</strong> — Merekayasa modul streaming video kursus. Mengimplementasikan state management yang efisien sehingga mengurangi waktu loading video dan buffering hingga 25%.</li>
        <li><strong>Interactive Learning Flow</strong> — Membangun seluruh alur pengguna kritikal di Flutter, termasuk secure course enrollment, kuis interaktif, dan real-time progress tracking.</li>
        <li><strong>Production Deployment</strong> — Menangani build pipeline aplikasi, code obfuscation, dan berhasil menavigasi pedoman review Google Play Store yang ketat untuk meluncurkan MVP.</li>
    </ul>
</div>`,
            en: `<p class="desc-intro">Developed the official <strong>Vocasia</strong> e-learning mobile application from the ground up. Responsible for writing the core business logic, translating UI/UX designs into interactive widgets, and integrating complex APIs to build a seamless digital learning environment.</p>

<div class="desc-highlights">
    <h4 class="desc-highlights__title">⚙️ Core Features & Technical Implementation</h4>
    <ul class="desc-highlights__list">
        <li><strong>Video Playback Optimization</strong> — Engineered the course video streaming module. Implemented efficient state management that reduced video load times and buffering by 25%.</li>
        <li><strong>Interactive Learning Flow</strong> — Built critical user journeys entirely in Flutter, including secure course enrollment, interactive quizzes, and real-time progress tracking.</li>
        <li><strong>Production Deployment</strong> — Handled the application build pipeline, code obfuscation, and successfully navigated the rigorous Google Play Store review guidelines to launch the MVP.</li>
    </ul>
</div>`
        },
        techStack: ['Flutter', 'Video Player', 'Provider', 'REST API', 'Firebase', 'Midtrans'],
        gradient: 'linear-gradient(to top right, #DA291C 0%, #0a0a0a 100%)',
        images: ['/images/projects/vocasia_bg.png'],
        mockupStyle: 'tilted',
        mockups: [
            '/images/projects/vocasia/Screenshot_20250515_203728.png',
            '/images/projects/vocasia/Screenshot_20250515_204106.png',
            '/images/projects/vocasia/Screenshot_20250515_204453.png',
            '/images/projects/vocasia/Screenshot_20250515_204639.png',
            '/images/projects/vocasia/Screenshot_20250515_205730.png',
            '/images/projects/vocasia/Screenshot_20250515_205848.png'
        ],
        playStoreLink: 'https://play.google.com/store/apps/details?id=id.vocasia.vocasia_app&pcampaignid=web_share'
    },
    // TEMPORARILY HIDDEN - idrusaljufri.com project
    // {
    //     slug: 'idrusaljufri-web',
    //     title: { id: 'idrusaljufri.com', en: 'idrusaljufri.com' },
    //     category: { id: 'Web Development', en: 'Web Development' },
    //     categoryTag: 'web',
    //     number: '04',
    //     description: {
    //         id: 'Website profesional yang dibangun dari nol menggunakan Next.js, mengelola seluruh siklus SDLC dari wireframe hingga deployment. Mencapai skor Lighthouse 90%+ untuk performa, aksesibilitas, dan SEO. Didukung backend Golang microservices untuk sinkronisasi data yang seamless.',
    //         en: 'Professional website built from scratch using Next.js, managing the entire SDLC cycle from wireframes to deployment. Achieved 90%+ Lighthouse scores for performance, accessibility, and SEO. Backed by Golang microservices for seamless data synchronization.'
    //     },
    //     techStack: ['Next.js', 'Golang', 'Microservices', 'REST API'],
    //     gradient: 'linear-gradient(135deg, #FBE122 0%, #1a1a1a 100%)',
    //     images: ['/images/projects/idrusaljufri.png'],
    // },
    {
        slug: 'warranty-smart',
        title: { id: 'Warranty Smart Indonesia', en: 'Warranty Smart Indonesia' },
        category: { id: 'Mobile App', en: 'Mobile App' },
        categoryTag: 'mobile',
        number: '05',
        description: {
            id: `<p class="desc-intro">Mengembangkan platform mobile B2C untuk mendigitalisasi klaim garansi kendaraan di <strong>PT. Airistel</strong>. Bekerja sesuai spesifikasi klien, saya menghasilkan implementasi pixel-perfect yang menyederhanakan proses tracking garansi bagi pemilik kendaraan.</p>

<div class="desc-highlights">
    <h4 class="desc-highlights__title">🛠️ Technical Highlights</h4>
    <ul class="desc-highlights__list">
        <li><strong>High-Fidelity UI Implementation</strong> — Menerjemahkan desain Figma yang kompleks menjadi widget Flutter responsif dengan akurasi visual 100% di berbagai ukuran layar.</li>
        <li><strong>Efficient State Management</strong> — Memanfaatkan arsitektur Provider untuk menangani validasi form kompleks dan alur pengajuan klaim multi-step secara efisien.</li>
        <li><strong>Robust Data Synchronization</strong> — Mengintegrasikan 20+ endpoint REST API, memastikan sinkronisasi real-time antara aplikasi mobile dan sistem backend legacy.</li>
    </ul>
</div>

<div class="desc-capabilities">
    <h4 class="desc-highlights__title">📱 Key Features</h4>
    <ul class="desc-highlights__list">
        <li><strong>Digital Garage</strong> — Manajemen portofolio garansi kendaraan.</li>
        <li><strong>Claim Tracking</strong> — Update status klaim layanan secara real-time.</li>
        <li><strong>Workshop Locator</strong> — Pencarian pusat layanan berbasis lokasi.</li>
    </ul>
</div>

<p class="desc-note"><em>📌 Client Project / Private Repository</em></p>`,
            en: `<p class="desc-intro">Developed a B2C mobile platform to digitize vehicle warranty claims at <strong>PT. Airistel</strong>. Working strictly with the client's specifications, I delivered a pixel-perfect implementation that streamlines the warranty tracking process for vehicle owners.</p>

<div class="desc-highlights">
    <h4 class="desc-highlights__title">🛠️ Technical Highlights</h4>
    <ul class="desc-highlights__list">
        <li><strong>High-Fidelity UI Implementation</strong> — Translated complex Figma designs into responsive Flutter widgets with 100% visual accuracy across various screen sizes.</li>
        <li><strong>Efficient State Management</strong> — Utilized Provider architecture to handle complex form validations and multi-step claim submission flows efficiently.</li>
        <li><strong>Robust Data Synchronization</strong> — Integrated 20+ REST API endpoints, ensuring real-time synchronization between the mobile app and the legacy backend system.</li>
    </ul>
</div>

<div class="desc-capabilities">
    <h4 class="desc-highlights__title">📱 Key Features</h4>
    <ul class="desc-highlights__list">
        <li><strong>Digital Garage</strong> — Management of multiple vehicle warranty portfolios.</li>
        <li><strong>Claim Tracking</strong> — Real-time status updates for service claims.</li>
        <li><strong>Workshop Locator</strong> — Location-based service center finder.</li>
    </ul>
</div>

<p class="desc-note"><em>📌 Client Project / Private Repository</em></p>`
        },
        techStack: ['Flutter', 'Provider', 'REST API', 'Google Maps'],
        gradient: 'linear-gradient(to bottom left, #DA291C 0%, #1a1a2e 100%)',
        images: ['/images/projects/warranty_bg.png'],
        mockupStyle: 'tilted',
        mockups: [
            '/images/projects/warranty/image.png',
            '/images/projects/warranty/image (1).png',
            '/images/projects/warranty/image (2).png',
            '/images/projects/warranty/image (3).png',
            '/images/projects/warranty/image (4).png'
        ]
    },
];
