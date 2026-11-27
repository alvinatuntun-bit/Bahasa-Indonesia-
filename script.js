const PASSAGES = {
  membaca1: {
    title: "Manfaat Membaca Buku Setiap Hari",
    paragraphs: [
      "Membaca buku minimal 15 menit setiap hari memberikan banyak manfaat bagi pelajar. Kebiasaan ini dapat memperkaya kosakata sehingga siswa lebih mudah memahami berbagai pelajaran di sekolah. Selain itu, membaca secara rutin juga melatih daya konsentrasi, menumbuhkan daya imajinasi, serta membantu mengurangi rasa jenuh setelah beraktivitas seharian."
    ]
  },
  membaca2: {
    title: "Sudut Baca Perpustakaan Sekolah",
    paragraphs: [
      "Perpustakaan sekolah kami tertata rapi dan terasa sangat nyaman. Di bagian tengah ruangan, berjajar rak-rak kayu berwarna cokelat muda yang penuh dengan buku cerita, ensiklopedia, dan buku pelajaran. Cahaya matahari pagi masuk melalui jendela kaca yang besar sehingga ruangan tampak terang alami. Di sudut ruangan, terdapat karpet hijau lembut dan bantal duduk untuk siswa yang ingin membaca santai sambil bersandar."
    ]
  },
  memahami1: {
    title: "Raka dan Bibit Mangga",
    paragraphs: [
      "Suatu sore, Raka menemukan sebuah biji mangga yang bagus setelah makan buah bersama keluarganya. Ia membersihkan biji itu lalu menanamnya di pot besar di halaman belakang. Beberapa temannya sempat menertawakan Raka karena menganggap menanam mangga dari biji akan memakan waktu bertahun-tahun.",
      "Raka tidak berkecil hati. Setiap pagi dan sore, ia menyiram dan merawat tanamannya dengan tekun hingga akhirnya dipindahkan ke tanah pekarangan. Tiga tahun berlalu, pohon mangga itu tumbuh tinggi dan berbuah lebat. Ketika musim panen tiba, Raka memetik buah-buah mangga yang manis itu dan membagikannya kepada tetangga serta teman-temannya dengan gembira."
    ]
  },
  memahami2: {
    title: "Mengapa Warna Langit Berubah Saat Senja?",
    paragraphs: [
      "Pada siang hari yang cerah, langit tampak berwarna biru karena cahaya matahari mengalami hamburan saat melewati atmosfer Bumi. Gelombang cahaya biru yang berukuran lebih pendek lebih mudah disebarkan ke segala arah oleh molekul udara dibandingkan warna lainnya. Namun, ketika sore hari menjelang matahari terbenam, posisi matahari berada lebih rendah di cakrawala sehingga cahayanya menempuh lapisan atmosfer yang lebih tebal. Akibatnya, sebagian besar cahaya biru sudah tersebar sebelum mencapai mata kita, dan warna jingga serta merah lebih mendominasi pemandangan langit senja."
    ]
  }
};

const QUESTIONS = [
  // TEMA 1: MEMBACA (1-10)
  {
    id: 1,
    theme: "Membaca",
    passageId: "membaca1",
    question: "Ide pokok paragraf di atas adalah ...",
    options: [
      "Manfaat kebiasaan membaca buku setiap hari bagi pelajar",
      "Waktu terbaik untuk membaca buku di sekolah",
      "Cara mengatasi rasa jenuh setelah beraktivitas seharian",
      "Jenis buku yang disukai oleh pelajar di sekolah"
    ],
    answer: 0,
    explanation: "Seluruh kalimat pada paragraf membahas berbagai manfaat kebiasaan membaca buku setiap hari (memperkaya kosakata, melatih konsentrasi, imajinasi, dan mengurangi jenuh)."
  },
  {
    id: 2,
    theme: "Membaca",
    passageId: "membaca1",
    question: "Kalimat utama pada paragraf tersebut terletak pada ...",
    options: [
      "Kalimat pertama (awal paragraf)",
      "Kalimat kedua (tengah paragraf)",
      "Kalimat ketiga (akhir paragraf)",
      "Seluruh kalimat secara tersirat"
    ],
    answer: 0,
    explanation: "Kalimat pertama merupakan pernyataan umum yang dijelaskan oleh kalimat-kalimat berikutnya (paragraf deduktif)."
  },
  {
    id: 3,
    theme: "Membaca",
    passageId: "membaca1",
    question: "Jika kamu ingin menemukan informasi angka lama waktu membaca (15 menit) secara cepat tanpa membaca keseluruhan kata, teknik membaca yang digunakan adalah ...",
    options: [
      "Membaca nyaring",
      "Membaca memindai (scanning)",
      "Membaca puitis",
      "Membaca berirama"
    ],
    answer: 1,
    explanation: "Membaca memindai (scanning) adalah teknik membaca cepat untuk mencari informasi spesifik seperti angka, tanggal, atau kata tertentu."
  },
  {
    id: 4,
    theme: "Membaca",
    passageId: "membaca2",
    question: "Objek yang digambarkan dalam teks deskripsi di atas adalah ...",
    options: [
      "Halaman depan sekolah pada pagi hari",
      "Suasana ruang kelas saat jam pelajaran",
      "Kondisi dan suasana perpustakaan sekolah",
      "Kegiatan siswa saat meminjam buku di toko buku"
    ],
    answer: 2,
    explanation: "Teks secara khusus menggambarkan tata letak, warna rak, pencahayaan, dan fasilitas di ruang perpustakaan sekolah."
  },
  {
    id: 5,
    theme: "Membaca",
    passageId: "membaca2",
    question: "Panca indra yang paling banyak dilibatkan penulis untuk menggambarkan teks tersebut adalah indra ...",
    options: [
      "Penglihatan",
      "Pendengaran",
      "Penciuman",
      "Pengecapan"
    ],
    answer: 0,
    explanation: "Ungkapan seperti 'tertata rapi', 'berwarna cokelat muda', 'tampak terang alami', dan 'karpet hijau' melibatkan indra penglihatan."
  },
  {
    id: 6,
    theme: "Membaca",
    passageId: "membaca2",
    question: "Tujuan utama penulis menyajikan teks deskripsi tersebut adalah ...",
    options: [
      "Mengajak siswa membeli buku baru di perpustakaan",
      "Menggambarkan keadaan perpustakaan secara rinci agar pembaca seolah melihatnya langsung",
      "Menceritakan sejarah berdirinya perpustakaan sekolah",
      "Menjelaskan aturan peminjaman buku di perpustakaan"
    ],
    answer: 1,
    explanation: "Teks deskripsi bertujuan menggambarkan objek atau tempat secara rinci sehingga pembaca seolah dapat melihatnya langsung."
  },
  {
    id: 7,
    theme: "Membaca",
    question: "Yang dimaksud dengan membaca nyaring adalah kegiatan membaca dengan ...",
    options: [
      "Sangat cepat dalam hati tanpa bersuara",
      "Suara keras tanpa memperhatikan tanda baca",
      "Suara jelas, pelafalan tepat, serta intonasi sesuai tanda baca",
      "Kecepatan tinggi hanya untuk mencari kata kunci"
    ],
    answer: 2,
    explanation: "Membaca nyaring menuntut kejelasan suara, ketepatan pelafalan kata, jeda, serta intonasi yang sesuai tanda baca."
  },
  {
    id: 8,
    theme: "Membaca",
    question: "Saat membacakan dialog dalam sebuah cerita di depan kelas, hal yang perlu diperhatikan agar pendengar dapat merasakan emosi tokoh adalah ...",
    options: [
      "Membaca dengan nada datar dari awal hingga akhir",
      "Mengabaikan tanda koma dan tanda seru",
      "Menutup buku sesering mungkin saat berbicara",
      "Mengatur intonasi, jeda, dan ekspresi suara dengan tepat"
    ],
    answer: 3,
    explanation: "Pengaturan intonasi, jeda, dan ekspresi suara membantu pendengar menangkap perasaan dan karakter tokoh."
  },
  {
    id: 9,
    theme: "Membaca",
    question: "Perhatikan kalimat berikut: \"Gerakan literasi sekolah bertujuan menumbuhkan minat baca dan kemampuan menulis siswa.\" Makna kata literasi pada kalimat tersebut adalah ...",
    options: [
      "Kegiatan olahraga pagi di halaman sekolah",
      "Kemampuan membaca, menulis, dan memahami informasi",
      "Perlombaan menghias ruang kelas antarangkatan",
      "Peraturan tata tertib siswa di perpustakaan"
    ],
    answer: 1,
    explanation: "Literasi berarti kemampuan dan keterampilan individu dalam membaca, menulis, mengolah, dan memahami informasi."
  },
  {
    id: 10,
    theme: "Membaca",
    question: "Teknik membaca sekilas (skimming) paling tepat digunakan ketika pembaca ingin ...",
    options: [
      "Mengetahui gambaran umum atau topik utama bacaan dengan cepat",
      "Menghafalkan setiap kata yang terdapat pada suatu paragraf",
      "Mencari nomor telepon tertentu di dalam daftar panjang",
      "Menirukan suara tokoh dalam naskah drama"
    ],
    answer: 0,
    explanation: "Membaca sekilas (skimming) dilakukan untuk memperoleh gambaran umum atau garis besar isi teks dalam waktu singkat."
  },

  // TEMA 2: MEMAHAMI (11-20)
  {
    id: 11,
    theme: "Memahami",
    passageId: "memahami1",
    question: "Tokoh utama dalam cerita tersebut adalah ...",
    options: [
      "Raka",
      "Tetangga Raka",
      "Ayah Raka",
      "Teman-teman Raka"
    ],
    answer: 0,
    explanation: "Raka menjadi pusat seluruh peristiwa mulai dari menanam biji mangga, merawatnya, hingga memanen dan membagikan hasilnya."
  },
  {
    id: 12,
    theme: "Memahami",
    passageId: "memahami1",
    question: "Watak tokoh Raka yang tercermin dalam cerita di atas adalah ...",
    options: [
      "Mudah menyerah dan pemarah",
      "Sombong dan suka pamer",
      "Sabar, tekun, dan suka berbagi",
      "Ceroboh dan tidak peduli"
    ],
    answer: 2,
    explanation: "Raka sabar saat ditertawakan, tekun merawat pohon selama tiga tahun, dan suka berbagi hasil panen kepada tetangga dan temannya."
  },
  {
    id: 13,
    theme: "Memahami",
    passageId: "memahami1",
    question: "Amanat atau pesan moral yang dapat dipetik dari cerita tersebut adalah ...",
    options: [
      "Jangan pernah mendengarkan nasihat teman saat menanam buah",
      "Kesabaran dan ketekunan dalam berusaha akan membuahkan hasil yang baik",
      "Menanam pohon mangga sebaiknya dilakukan di dalam rumah saja",
      "Buah mangga hanya terasa manis jika ditanam di dalam pot besar"
    ],
    answer: 1,
    explanation: "Pesan utama cerita adalah kesabaran dan ketekunan dalam berusaha akan menghasilkan buah yang bermanfaat."
  },
  {
    id: 14,
    theme: "Memahami",
    passageId: "memahami1",
    question: "Mengapa teman-teman Raka menertawakannya pada awal cerita?",
    options: [
      "Karena biji mangga yang ditanam Raka sudah membusuk",
      "Karena halaman belakang rumah Raka terlalu sempit",
      "Karena Raka tidak suka makan buah mangga",
      "Karena mereka menganggap menanam mangga dari biji butuh waktu terlalu lama"
    ],
    answer: 3,
    explanation: "Disebutkan pada paragraf pertama bahwa teman-temannya menertawakan Raka karena menganggap menanam mangga dari biji memakan waktu bertahun-tahun."
  },
  {
    id: 15,
    theme: "Memahami",
    passageId: "memahami2",
    question: "Pernyataan hubungan sebab-akibat yang sesuai dengan isi teks di atas adalah ...",
    options: [
      "Gelombang cahaya biru mudah disebarkan oleh molekul udara sehingga langit siang hari tampak biru",
      "Lapisan atmosfer pada siang hari lebih tebal daripada sore hari sehingga langit menjadi jingga",
      "Cahaya merah memiliki gelombang paling pendek sehingga hilang saat matahari terbenam",
      "Posisi matahari yang tinggi di siang hari membuat cahaya tidak melewati atmosfer Bumi"
    ],
    answer: 0,
    explanation: "Teks menjelaskan sebab langit siang berwarna biru adalah gelombang cahaya biru yang pendek lebih mudah disebarkan molekul udara."
  },
  {
    id: 16,
    theme: "Memahami",
    passageId: "memahami2",
    question: "Pertanyaan ADIKSIMBA yang jawabannya dijelaskan secara langsung pada bagian akhir paragraf adalah ...",
    options: [
      "Siapa yang pertama kali meneliti warna langit?",
      "Di mana letak matahari ketika malam hari tiba?",
      "Mengapa langit tampak berwarna jingga dan merah saat senja?",
      "Kapan waktu terbaik untuk memotret matahari terbit?"
    ],
    answer: 2,
    explanation: "Bagian akhir teks menjelaskan alasan (mengapa) langit senja didominasi warna jingga dan merah karena cahaya menempuh atmosfer yang lebih tebal."
  },
  {
    id: 17,
    theme: "Memahami",
    passageId: "memahami2",
    question: "Simpulan yang paling tepat untuk bacaan tersebut adalah ...",
    options: [
      "Langit selalu berwarna biru sepanjang hari tanpa perubahan apa pun",
      "Perbedaan warna langit antara siang hari dan senja terjadi akibat proses hamburan cahaya matahari di atmosfer",
      "Warna jingga pada sore hari berasal dari pantulan cahaya laut ke udara",
      "Cahaya matahari hanya terdiri atas warna biru dan merah saja"
    ],
    answer: 1,
    explanation: "Simpulan merangkum isi teks bahwa perbedaan warna langit siang dan senja terjadi akibat hamburan cahaya matahari di atmosfer."
  },
  {
    id: 18,
    theme: "Memahami",
    question: "Perhatikan kalimat-kalimat berikut! Manakah yang merupakan kalimat fakta?",
    options: [
      "Musim hujan adalah musim yang paling membosankan bagi semua orang.",
      "Bakso buatan Pak Hasan merupakan makanan terenak di kota ini.",
      "Indonesia terletak di antara dua benua, yaitu Benua Asia dan Benua Australia.",
      "Sebaiknya seluruh siswa belajar minimal lima jam setiap malam."
    ],
    answer: 2,
    explanation: "Letak geografis Indonesia di antara Benua Asia dan Australia adalah kenyataan objektif yang dapat dibuktikan kebenarannya (fakta)."
  },
  {
    id: 19,
    theme: "Memahami",
    question: "Perhatikan kalimat berikut: \"Dina dikenal sebagai anak yang ringan tangan dalam membantu pekerjaan orang tuanya.\" Makna ungkapan ringan tangan pada kalimat tersebut adalah ...",
    options: [
      "Suka menolong",
      "Mudah marah",
      "Suka mencuri",
      "Cepat lelah"
    ],
    answer: 0,
    explanation: "Ungkapan 'ringan tangan' dalam konteks membantu berarti suka menolong atau rajin membantu."
  },
  {
    id: 20,
    theme: "Memahami",
    question: "Kalimat \"Menurut pendapatku, membaca buku cetak lebih nyaman di mata daripada membaca di layar ponsel\" termasuk jenis kalimat ...",
    options: [
      "Perintah",
      "Larangan",
      "Fakta",
      "Opini"
    ],
    answer: 3,
    explanation: "Frasa 'Menurut pendapatku' dan penilaian subjektif 'lebih nyaman' menunjukkan kalimat opini."
  },

  // TEMA 3: TANDA BACA (21-30)
  {
    id: 21,
    theme: "Tanda Baca",
    question: "Penggunaan tanda baca untuk kalimat tanya yang paling tepat adalah ...",
    options: [
      "Kapan pameran buku tahunan itu akan dimulai!",
      "Kapan pameran buku tahunan itu akan dimulai?",
      "Kapan pameran buku tahunan itu akan dimulai.",
      "Kapan pameran buku tahunan itu akan dimulai,"
    ],
    answer: 1,
    explanation: "Kalimat tanya diawali kata tanya (Kapan) dan diakhiri dengan tanda tanya (?)."
  },
  {
    id: 22,
    theme: "Tanda Baca",
    question: "Kalimat perintah berikut yang menggunakan tanda baca paling tepat adalah ...",
    options: [
      "Tolong rapikan kembali buku-buku di rak itu?",
      "Tolong rapikan kembali buku-buku di rak itu;",
      "Tolong rapikan kembali buku-buku di rak itu!",
      "Tolong rapikan kembali buku-buku di rak itu,"
    ],
    answer: 2,
    explanation: "Kalimat perintah atau permintaan tegas diakhiri dengan tanda seru (!)."
  },
  {
    id: 23,
    theme: "Tanda Baca",
    question: "Penggunaan tanda koma (,) dalam kalimat perincian yang tepat terdapat pada kalimat ...",
    options: [
      "Ibu membeli buku tulis, pensil, penghapus, dan penggaris.",
      "Ibu membeli buku tulis, pensil penghapus, dan penggaris.",
      "Ibu membeli, buku tulis, pensil, penghapus dan penggaris.",
      "Ibu membeli buku tulis pensil, penghapus, dan penggaris."
    ],
    answer: 0,
    explanation: "Tanda koma dipakai di antara unsur-unsur dalam perincian lebih dari dua unsur, termasuk sebelum kata 'dan'."
  },
  {
    id: 24,
    theme: "Tanda Baca",
    question: "Penulisan kalimat langsung yang menggunakan tanda petik (\"...\") dan tanda baca secara tepat adalah ...",
    options: [
      "Ibu berkata: \"Jangan lupa mencuci tangan sebelum makan\".",
      "Ibu berkata \"Jangan lupa mencuci tangan sebelum makan!\"",
      "Ibu berkata, \"jangan lupa mencuci tangan sebelum makan\".",
      "Ibu berkata, \"Jangan lupa mencuci tangan sebelum makan.\""
    ],
    answer: 3,
    explanation: "Petikan langsung dipisahkan dari bagian pengiring dengan tanda koma, diawali huruf kapital, dan tanda titik penutup berada di dalam tanda petik penutup."
  },
  {
    id: 25,
    theme: "Tanda Baca",
    question: "Penggunaan tanda titik dua (:) yang benar sesuai kaidah EYD V terdapat pada kalimat ...",
    options: [
      "Kami memerlukan: pulpen, spidol, dan kertas karton.",
      "Kami memerlukan alat tulis: pulpen, spidol, dan kertas karton.",
      "Kami: memerlukan alat tulis pulpen, spidol, dan kertas karton.",
      "Kami memerlukan alat tulis, pulpen: spidol, dan kertas karton."
    ],
    answer: 1,
    explanation: "Tanda titik dua dipakai pada akhir pernyataan lengkap ('Kami memerlukan alat tulis') yang diikuti perincian atau penjelasan."
  },
  {
    id: 26,
    theme: "Tanda Baca",
    question: "Perhatikan kalimat berikut: \"Wah indah sekali pemandangan pegunungan di pagi hari\" — Perbaikan tanda baca yang tepat untuk kalimat seruan tersebut adalah ...",
    options: [
      "Wah indah sekali, pemandangan pegunungan di pagi hari?",
      "Wah. Indah sekali pemandangan pegunungan di pagi hari!",
      "Wah, indah sekali pemandangan pegunungan di pagi hari!",
      "Wah; indah sekali pemandangan pegunungan di pagi hari."
    ],
    answer: 2,
    explanation: "Kata seru ('Wah') diikuti tanda koma (,), dan kalimat seruan diakhiri tanda seru (!)."
  },
  {
    id: 27,
    theme: "Tanda Baca",
    question: "Penggunaan tanda hubung (-) yang tepat terdapat pada kalimat ...",
    options: [
      "Peserta lomba karya tulis ilmiah berasal dari berbagai daerah se-Indonesia.",
      "Adik sedang menggambar pemandangan di halaman rumah-nya.",
      "Ibu membeli dua-kilogram buah jeruk manis di pasar.",
      "Kakak berangkat menuju sekolah pada pukul tujuh-pagi."
    ],
    answer: 0,
    explanation: "Menurut EYD V, tanda hubung dipakai untuk merangkai unsur 'se-' dengan kata berikutnya yang dimulai huruf kapital (se-Indonesia)."
  },
  {
    id: 28,
    theme: "Tanda Baca",
    question: "Penulisan tempat dan tanggal surat yang tepat sesuai kaidah ejaan Bahasa Indonesia adalah ...",
    options: [
      "Bandung. 15 November 2026.",
      "Bandung, 15 November 2026",
      "Bandung; 15 November 2026.",
      "Bandung: 15 November 2026,"
    ],
    answer: 1,
    explanation: "Penulisan tempat dan tanggal surat dipisahkan oleh tanda koma (,) dan tidak diakhiri tanda titik."
  },
  {
    id: 29,
    theme: "Tanda Baca",
    question: "Penggunaan tanda titik (.) yang TIDAK tepat terdapat pada pilihan ...",
    options: [
      "Ayah berangkat ke kantor pukul 07.30 WIB.",
      "Siswa kelas VI sedang berdiskusi di ruang perpustakaan.",
      "Jumlah pengunjung pameran mencapai 1.250 orang.",
      "Judul karangan: Indahnya Kebersamaan di Desa Kami."
    ],
    answer: 3,
    explanation: "Tanda titik tidak digunakan pada akhir judul karangan, buku, atau kepala tabel."
  },
  {
    id: 30,
    theme: "Tanda Baca",
    question: "Perhatikan kalimat berikut: \"Meskipun hujan turun sangat deras Budi tetap berangkat ke sekolah\" — Penulisan kalimat tersebut dengan tanda baca yang tepat adalah ...",
    options: [
      "Meskipun hujan turun sangat deras, Budi tetap berangkat ke sekolah.",
      "Meskipun hujan turun sangat deras; Budi tetap berangkat ke sekolah?",
      "Meskipun, hujan turun sangat deras Budi tetap berangkat ke sekolah.",
      "Meskipun hujan turun sangat deras Budi, tetap berangkat ke sekolah."
    ],
    answer: 0,
    explanation: "Jika anak kalimat mendahului induk kalimat pada kalimat majemuk bertingkat, keduanya dipisahkan oleh tanda koma (,) dan diakhiri tanda titik (.)."
  }
];

const URAIAN_QUESTIONS = [
  {
    theme: "Membaca",
    number: 1,
    question: "Jelaskan perbedaan antara teknik membaca sekilas (skimming) dan membaca memindai (scanning), lalu berikan masing-masing satu contoh penggunaannya!",
    answer: "Skimming (membaca sekilas) bertujuan mendapatkan gambaran umum atau topik utama bacaan dengan cepat (contoh: membaca sekilas artikel berita untuk mengetahui intinya). Scanning (membaca memindai) bertujuan menemukan informasi spesifik secara cepat (contoh: mencari arti kata di kamus atau jadwal keberangkatan kereta)."
  },
  {
    theme: "Membaca",
    number: 2,
    question: "Tentukan ide pokok dan satu kalimat penjelas dari paragraf berikut!",
    quote: "\"Pengelolaan sampah kertas dapat dilakukan dengan mendaur ulang kertas bekas menjadi produk baru yang berguna. Kertas koran dan buku tulis bekas dapat diolah menjadi bubur kertas untuk membuat kerajinan tangan atau kardus kemasan. Dengan langkah ini, jumlah pohon yang ditebang untuk bahan baku kertas baru dapat dikurangi.\"",
    answer: "Ide pokok: Pengelolaan sampah kertas melalui daur ulang menjadi produk baru yang berguna. Kalimat penjelas (salah satu): Kertas koran dan buku tulis bekas dapat diolah menjadi bubur kertas untuk membuat kerajinan tangan atau kardus kemasan."
  },
  {
    theme: "Membaca",
    number: 3,
    question: "Mengapa pengaturan jeda dan intonasi sangat penting saat melakukan kegiatan membaca nyaring di depan pendengar?",
    answer: "Agar kalimat tidak terdengar datar, makna bacaan tersampaikan secara utuh tanpa membingungkan pendengar, serta penekanan atau emosi pada bagian teks terasa jelas."
  },
  {
    theme: "Memahami",
    number: 4,
    question: "Tuliskan kesimpulan isi paragraf berikut dalam 1–2 kalimat menggunakan bahasamu sendiri!",
    quote: "\"Sarapan pagi sangat penting sebelum siswa berangkat ke sekolah. Makanan bergizi di pagi hari menyediakan energi yang dibutuhkan tubuh dan otak untuk berpikir. Siswa yang terbiasa sarapan umumnya lebih fokus mengikuti pelajaran dan tidak mudah lemas di kelas.\"",
    answer: "Sarapan pagi bergizi penting bagi siswa karena memberi energi bagi tubuh dan otak agar lebih fokus serta tidak mudah lemas saat mengikuti pelajaran."
  },
  {
    theme: "Memahami",
    number: 5,
    question: "Tuliskan masing-masing 1 contoh kalimat fakta dan 1 contoh kalimat opini bertema kebersihan lingkungan sekolah!",
    answer: "Fakta: Sekolah menyediakan tempat sampah organik dan anorganik di depan setiap ruang kelas. Opini: Menurut saya, kerja bakti kelas sebaiknya dilakukan bersama setiap Jumat pagi agar kelas terasa lebih nyaman."
  },
  {
    theme: "Memahami",
    number: 6,
    question: "Jelaskan makna ungkapan banting tulang, kemudian buatlah satu kalimat efektif menggunakan ungkapan tersebut!",
    answer: "Makna: Bekerja keras dengan sekuat tenaga. Contoh kalimat: Ayah rela banting tulang setiap hari demi memenuhi kebutuhan pendidikan anak-anaknya."
  },
  {
    theme: "Tanda Baca",
    number: 7,
    question: "Perbaiki penggunaan huruf kapital dan tanda baca pada kalimat berikut sesuai kaidah EYD V: \"ibu bertanya kepada siti apakah kamu sudah mengerjakan tugas bahasa indonesia\"",
    answer: "Ibu bertanya kepada Siti, \"Apakah kamu sudah mengerjakan tugas Bahasa Indonesia?\""
  },
  {
    theme: "Tanda Baca",
    number: 8,
    question: "Buatlah 2 kalimat berbeda: satu menggunakan tanda petik (\"...\") untuk kalimat langsung, dan satu menggunakan tanda titik dua (:) untuk perincian!",
    answer: "Kalimat langsung: Guru berpesan, \"Kumpulkan tugas evaluasi sebelum jam istirahat.\" | Kalimat perincian: Kami harus membawa perlengkapan berkemah: tenda, senter, kompas, dan jas hujan."
  },
  {
    theme: "Tanda Baca",
    number: 9,
    question: "Jelaskan fungsi tanda koma (,) pada kalimat majemuk bertingkat yang anak kalimatnya mendahului induk kalimat, lalu berikan 1 contoh kalimatnya!",
    answer: "Fungsi: Memisahkan anak kalimat yang berada di awal kalimat dari induk kalimatnya agar struktur dan jeda kalimat jelas. Contoh: Karena jalanan macet, Rina tiba di sekolah lima menit lebih lambat."
  }
];

const LETTERS = ["A", "B", "C", "D"];

let activeQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let selectedTheme = "semua";
let timerSeconds = 0;
let timerInterval = null;

// Elements
const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const quizStatusBar = document.getElementById("quizStatusBar");
const timerDisplay = document.getElementById("timerDisplay");
const progressDisplay = document.getElementById("progressDisplay");

const studentNameInput = document.getElementById("studentName");
const studentClassInput = document.getElementById("studentClass");

const questionThemeBadge = document.getElementById("questionThemeBadge");
const questionNumberLabel = document.getElementById("questionNumberLabel");
const passageBox = document.getElementById("passageBox");
const passageTitle = document.getElementById("passageTitle");
const passageBody = document.getElementById("passageBody");
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const navGrid = document.getElementById("navGrid");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const exitQuizBtn = document.getElementById("exitQuizBtn");
const retryBtn = document.getElementById("retryBtn");
const backHomeBtn = document.getElementById("backHomeBtn");

function init() {
  renderUraian();

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => {
        p.hidden = true;
        p.classList.remove("active");
      });
      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      target.hidden = false;
      target.classList.add("active");
    });
  });

  document.querySelectorAll(".theme-card").forEach((card) => {
    card.addEventListener("click", () => startQuiz(card.dataset.theme));
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < activeQuestions.length - 1) {
      currentIndex++;
      renderQuestion();
    }
  });

  finishBtn.addEventListener("click", finishQuiz);
  exitQuizBtn.addEventListener("click", goHome);
  backHomeBtn.addEventListener("click", goHome);
  retryBtn.addEventListener("click", () => startQuiz(selectedTheme));
}

function renderUraian() {
  const container = document.getElementById("uraianList");
  container.innerHTML = "";

  URAIAN_QUESTIONS.forEach((item) => {
    const card = document.createElement("div");
    card.className = "uraian-item";

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = `Tema: ${item.theme}`;

    const title = document.createElement("h4");
    title.textContent = `${item.number}. ${item.question}`;

    card.appendChild(badge);
    card.appendChild(title);

    if (item.quote) {
      const quote = document.createElement("div");
      quote.className = "uraian-quote";
      quote.textContent = item.quote;
      card.appendChild(quote);
    }

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "btn btn-secondary btn-sm";
    toggleBtn.textContent = "Lihat Pedoman Jawaban";

    const answerBox = document.createElement("div");
    answerBox.className = "uraian-answer";
    answerBox.hidden = true;
    answerBox.textContent = item.answer;

    toggleBtn.addEventListener("click", () => {
      const isHidden = answerBox.hidden;
      answerBox.hidden = !isHidden;
      toggleBtn.textContent = isHidden ? "Sembunyikan Jawaban" : "Lihat Pedoman Jawaban";
    });

    card.appendChild(toggleBtn);
    card.appendChild(answerBox);
    container.appendChild(card);
  });
}

function startQuiz(theme) {
  selectedTheme = theme;
  activeQuestions =
    theme === "semua"
      ? [...QUESTIONS]
      : QUESTIONS.filter((q) => q.theme === theme);

  currentIndex = 0;
  userAnswers = {};
  timerSeconds = 0;

  homeScreen.hidden = true;
  resultScreen.hidden = true;
  quizScreen.hidden = false;
  quizStatusBar.hidden = false;

  startTimer();
  renderNavigator();
  renderQuestion();
  updateProgress();
}

function startTimer() {
  stopTimer();
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const mins = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const secs = String(timerSeconds % 60).padStart(2, "0");
  timerDisplay.textContent = `${mins}:${secs}`;
}

function updateProgress() {
  const answeredCount = Object.keys(userAnswers).length;
  progressDisplay.textContent = `${answeredCount} / ${activeQuestions.length} Terjawab`;
}

function renderNavigator() {
  navGrid.innerHTML = "";
  activeQuestions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-num";
    btn.textContent = idx + 1;
    btn.addEventListener("click", () => {
      currentIndex = idx;
      renderQuestion();
    });
    navGrid.appendChild(btn);
  });
}

function updateNavigatorStates() {
  const buttons = navGrid.querySelectorAll(".nav-num");
  buttons.forEach((btn, idx) => {
    const q = activeQuestions[idx];
    btn.classList.toggle("current", idx === currentIndex);
    btn.classList.toggle("answered", userAnswers[q.id] !== undefined);
  });
}

function renderQuestion() {
  const q = activeQuestions[currentIndex];
  questionThemeBadge.textContent = `Tema: ${q.theme}`;
  questionNumberLabel.textContent = `Soal ${currentIndex + 1} dari ${activeQuestions.length}`;

  if (q.passageId && PASSAGES[q.passageId]) {
    const passage = PASSAGES[q.passageId];
    passageBox.hidden = false;
    passageTitle.textContent = passage.title;
    passageBody.innerHTML = "";
    passage.paragraphs.forEach((pText) => {
      const p = document.createElement("p");
      p.textContent = pText;
      passageBody.appendChild(p);
    });
  } else {
    passageBox.hidden = true;
  }

  questionText.textContent = `${currentIndex + 1}. ${q.question}`;
  optionsList.innerHTML = "";

  q.options.forEach((optText, optIdx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    if (userAnswers[q.id] === optIdx) {
      btn.classList.add("selected");
    }

    const letterSpan = document.createElement("span");
    letterSpan.className = "option-letter";
    letterSpan.textContent = LETTERS[optIdx];

    const textSpan = document.createElement("span");
    textSpan.textContent = optText;

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);
    btn.addEventListener("click", () => {
      userAnswers[q.id] = optIdx;
      renderQuestion();
      updateProgress();
    });
    optionsList.appendChild(btn);
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === activeQuestions.length - 1;
  updateNavigatorStates();
}

function finishQuiz() {
  const unanswered = activeQuestions.length - Object.keys(userAnswers).length;
  if (unanswered > 0) {
    const ok = window.confirm(
      `Masih ada ${unanswered} soal yang belum dijawab. Tetap selesaikan dan hitung nilai sekarang?`
    );
    if (!ok) return;
  }

  stopTimer();
  quizScreen.hidden = true;
  quizStatusBar.hidden = true;
  resultScreen.hidden = false;

  const name = studentNameInput.value.trim() || "Peserta Evaluasi";
  const kelas = studentClassInput.value.trim();
  const mins = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const secs = String(timerSeconds % 60).padStart(2, "0");

  document.getElementById("resultIdentity").textContent = kelas ? `${name} (${kelas})` : name;

  let correctTotal = 0;
  const themeStats = {};

  activeQuestions.forEach((q) => {
    if (!themeStats[q.theme]) {
      themeStats[q.theme] = { correct: 0, total: 0 };
    }
    themeStats[q.theme].total++;
    if (userAnswers[q.id] === q.answer) {
      correctTotal++;
      themeStats[q.theme].correct++;
    }
  });

  const score = Math.round((correctTotal / activeQuestions.length) * 100);
  document.getElementById("finalScore").textContent = score;
  document.getElementById("resultMeta").textContent =
    `Paket: ${selectedTheme === "semua" ? "Semua Tema" : "Tema " + selectedTheme} • Benar ${correctTotal} dari ${activeQuestions.length} soal • Durasi ${mins}:${secs}`;

  const breakdown = document.getElementById("themeBreakdown");
  breakdown.innerHTML = "";
  Object.entries(themeStats).forEach(([themeName, stat]) => {
    const pct = Math.round((stat.correct / stat.total) * 100);
    const box = document.createElement("div");
    box.className = "summary-box";
    box.innerHTML = `
      <h4>Tema ${themeName}</h4>
      <div class="summary-stat">${stat.correct}/${stat.total} Benar (${pct})</div>
    `;
    breakdown.appendChild(box);
  });

  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = "";
  activeQuestions.forEach((q, idx) => {
    const chosen = userAnswers[q.id];
    const isCorrect = chosen === q.answer;

    const item = document.createElement("div");
    item.className = `review-item ${isCorrect ? "correct" : "wrong"}`;

    const chosenLabel =
      chosen !== undefined
        ? `${LETTERS[chosen]}. ${q.options[chosen]}`
        : "Tidak dijawab";
    const correctLabel = `${LETTERS[q.answer]}. ${q.options[q.answer]}`;

    const head = document.createElement("div");
    head.className = "review-head";
    head.innerHTML = `
      <span>Soal ${idx + 1} — ${q.theme}</span>
      <span class="${isCorrect ? "status-ok" : "status-err"}">${isCorrect ? "Benar" : "Kurang Tepat"}</span>
    `;

    const qEl = document.createElement("p");
    qEl.className = "review-q";
    qEl.textContent = q.question;

    const metaEl = document.createElement("div");
    metaEl.className = "review-meta";
    metaEl.innerHTML = `
      <div><strong>Jawabanmu:</strong> ${escapeHtml(chosenLabel)}</div>
      <div><strong>Kunci Jawaban:</strong> ${escapeHtml(correctLabel)}</div>
    `;

    const expEl = document.createElement("div");
    expEl.className = "review-exp";
    expEl.textContent = `Pembahasan: ${q.explanation}`;

    item.appendChild(head);
    item.appendChild(qEl);
    item.appendChild(metaEl);
    item.appendChild(expEl);
    reviewList.appendChild(item);
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function goHome() {
  stopTimer();
  quizScreen.hidden = true;
  resultScreen.hidden = true;
  quizStatusBar.hidden = true;
  homeScreen.hidden = false;
}

init();
