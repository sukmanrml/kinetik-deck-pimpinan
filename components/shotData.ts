export interface ShotStep { n: number; x: number; y: number; text: string }
export interface ShotDef { src: string; steps: ShotStep[] }

export const shots: Record<string, ShotDef> = {
    "member-weeks": {
        "src": "/shots/member-weeks.png",
        "steps": [
            {
                "n": 1,
                "x": 16.5,
                "y": 30.3,
                "text": "Pilih bulan, lalu pilih minggunya. Daftar dulu, bukan kalender penuh."
            },
            {
                "n": 2,
                "x": 47.5,
                "y": 26,
                "text": "Kegiatan dan Capaian terisi: berapa kegiatan minggu itu, dan berapa yang sudah ada capaiannya."
            },
            {
                "n": 3,
                "x": 61.4,
                "y": 26,
                "text": "Terkirim ke atasan: berapa kegiatan yang sudah dikirim ke kipApp."
            },
            {
                "n": 4,
                "x": 79.5,
                "y": 30.3,
                "text": "Status minggu: Belum ditulis, atau Belum ada kegiatan."
            }
        ]
    },
    "member-add": {
        "src": "/shots/member-add.png",
        "steps": [
            {
                "n": 1,
                "x": 34,
                "y": 24.5,
                "text": "Pilih RK dari daftar RK anggota."
            },
            {
                "n": 2,
                "x": 34,
                "y": 30.7,
                "text": "Tulis kegiatan, atau ambil dari List Aktivitas."
            },
            {
                "n": 3,
                "x": 34,
                "y": 49,
                "text": "Tanggal di masa depan boleh diisi. Di form kipApp, ini ditolak."
            },
            {
                "n": 4,
                "x": 34,
                "y": 54.5,
                "text": "Target, satuan, dan capaian berupa angka."
            },
            {
                "n": 5,
                "x": 49.2,
                "y": 63,
                "text": "Bukti dukung berupa link."
            },
            {
                "n": 6,
                "x": 58.3,
                "y": 86,
                "text": "Simpan. Kirim ke kipApp masih tahap uji."
            }
        ]
    },
    "pj-week-detail": {
        "src": "/shots/pj-week-detail.png",
        "steps": [
            {
                "n": 1,
                "x": 17.4,
                "y": 24.2,
                "text": "Pilih tim yang dipimpin."
            },
            {
                "n": 2,
                "x": 17.4,
                "y": 40,
                "text": "Rencana minggu ini: kegiatan semua anggota dalam satu tabel. Tidak ada lembar Excel."
            },
            {
                "n": 3,
                "x": 85,
                "y": 45.8,
                "text": "Status tiap kegiatan, misalnya Terkirim ke atasan."
            },
            {
                "n": 4,
                "x": 88,
                "y": 31,
                "text": "Unduh Excel untuk bahan rapat."
            }
        ]
    },
    "pj-paraphrase": {
        "src": "/shots/pj-paraphrase.png",
        "steps": [
            {
                "n": 1,
                "x": 19.5,
                "y": 42.5,
                "text": "Kontribusi anggota di kiri. PJ membaca, lalu bisa mengambil kalimatnya."
            },
            {
                "n": 2,
                "x": 50.8,
                "y": 42.5,
                "text": "Parafrase PJ di kanan. Ditulis sendiri, tidak ada isi otomatis."
            },
            {
                "n": 3,
                "x": 50.8,
                "y": 54,
                "text": "Target, satuan, dan capaian RK berupa angka."
            },
            {
                "n": 4,
                "x": 50.8,
                "y": 63,
                "text": "Simpan, atau Simpan dan kunci supaya rekap tidak berubah lagi."
            }
        ]
    },
    "head-compliance": {
        "src": "/shots/head-compliance.png",
        "steps": [
            {
                "n": 1,
                "x": 16,
                "y": 16.2,
                "text": "Batas pengisian rencana: Senin pukul 09.00."
            },
            {
                "n": 2,
                "x": 17.2,
                "y": 25,
                "text": "Minggu ini: berapa persen anggota yang sudah membuat rencana."
            },
            {
                "n": 3,
                "x": 58,
                "y": 25,
                "text": "Triwulan ini: berapa persen rencana minggu lalu yang berakhir selesai."
            },
            {
                "n": 4,
                "x": 68.5,
                "y": 52.5,
                "text": "Tiap tim, tiap minggu. Merah artinya belum ada rencana."
            }
        ]
    },
    "head-overview": {
        "src": "/shots/head-overview.png",
        "steps": [
            {
                "n": 1,
                "x": 18.6,
                "y": 21,
                "text": "Kegiatan belum punya target. Contohnya 6 kegiatan bulan ini."
            },
            {
                "n": 2,
                "x": 45.8,
                "y": 21,
                "text": "Kegiatan selesai tanpa capaian. 645 dalam 60 hari terakhir."
            },
            {
                "n": 3,
                "x": 91,
                "y": 21,
                "text": "Belum ada rencana minggu ini. 86 orang."
            },
            {
                "n": 4,
                "x": 45.8,
                "y": 60.3,
                "text": "Kenaikan pangkat atau jenjang: siapa yang siap atau hampir."
            }
        ]
    },
    "head-credit": {
        "src": "/shots/head-credit.png",
        "steps": [
            {
                "n": 1,
                "x": 38,
                "y": 19,
                "text": "Saring status: Siap diusulkan, Hampir, Berjalan, Jenjang puncak, Bukan JF."
            },
            {
                "n": 2,
                "x": 44.3,
                "y": 32,
                "text": "Menuju pangkat atau jenjang berikutnya."
            },
            {
                "n": 3,
                "x": 58.2,
                "y": 31.5,
                "text": "Angka kredit terkumpul dibanding yang dibutuhkan."
            },
            {
                "n": 4,
                "x": 89,
                "y": 32,
                "text": "Status: Siap diusulkan atau Hampir."
            }
        ]
    },
    "head-fra": {
        "src": "/shots/head-fra.png",
        "steps": [
            {
                "n": 1,
                "x": 17.4,
                "y": 21,
                "text": "Pilih triwulan."
            },
            {
                "n": 2,
                "x": 27.4,
                "y": 21,
                "text": "Nilai SAKIP tahun ini."
            },
            {
                "n": 3,
                "x": 79,
                "y": 29.6,
                "text": "Predikat SAKIP dihitung otomatis."
            },
            {
                "n": 4,
                "x": 17.2,
                "y": 47,
                "text": "Indikator: target, alokasi, realisasi, dan capaian per triwulan."
            }
        ]
    },
    "org": {
        "src": "/shots/org.png",
        "steps": [
            {
                "n": 1,
                "x": 16.5,
                "y": 15.3,
                "text": "Cari nama pegawai atau tim."
            },
            {
                "n": 2,
                "x": 17.8,
                "y": 22,
                "text": "Satker dan kepala selalu pinned di paling atas."
            },
            {
                "n": 3,
                "x": 18,
                "y": 27.5,
                "text": "Tim yang sedang dilihat pinned di bawahnya."
            },
            {
                "n": 4,
                "x": 19.4,
                "y": 46,
                "text": "Ketua tim ditandai. Klik satu orang untuk melihat semua tim tempat ia berada."
            }
        ]
    }
};
