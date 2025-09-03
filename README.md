# Offboard Studio Components Store

Bu proje, Offboard Studio platformu için blok-tabanlı görsel programlama bileşenlerini sunan bir API servisidir. NestJS framework'ü kullanılarak geliştirilmiş, robotik, makine öğrenmesi, bilgisayarlı görü ve kontrol sistemleri için modüler bloklar sağlar.

## 📋 Proje Genel Bakış

### Ana Amaç
- Offboard Studio görsel programlama ortamı için blok katalogu API'si sunmak
- Robotik, OpenCV, TensorFlow ve ROS bileşenlerini organize etmek
- Blok-tabanlı programlama için JSON formatında blok tanımları sağlamak

### Teknoloji Stack'i
- **Backend Framework**: NestJS (Node.js + TypeScript)
- **API Documentation**: Swagger UI + Redoc
- **Deployment**: Vercel
- **Testing**: Jest
- **Code Quality**: ESLint + Prettier

## 🏗️ Mimari Yapısı

### 1. Klasör Yapısı
```
src/
├── main.ts                     # Uygulama giriş noktası
├── app.module.ts               # Ana modül
├── app.controller.ts           # Ana controller
├── app.service.ts              # Ana servis
├── blocks/                     # Blok katalog modülü
│   ├── block-catalog.controller.ts
│   ├── block-catalog.service.ts
│   └── block-catalog.module.ts
├── collection_blocks/          # Blok koleksiyon tanımları
│   └── collection_factory.ts
└── assets/
    └── collection/             # JSON blok dosyaları
        ├── control/           # Kontrol sistemi blokları
        ├── opencv/            # OpenCV blokları
        ├── ros-sensors/       # ROS sensor blokları
        ├── tensorflow/        # TensorFlow blokları
        └── industrial/        # Endüstriyel bloklar
```

### 2. API Endpoint'leri

#### **GET /api/blocks/categories**
Tüm blok kategorilerini listeler
```json
{
  "id": "blocks",
  "label": "Blocks Components",
  "items": [
    {
      "id": "motorDriver",
      "path": "control",
      "file": "MotorDriver.json"
    }
  ]
}
```

#### **GET /api/blocks/:group**
Belirli bir gruptaki tüm blokları getir
- `group`: blocks, processing, drivers

#### **GET /api/blocks/:group/:category/:blockId**
Spesifik blok detayını getir
- `group`: Ana kategori (blocks, processing, drivers)
- `category`: Alt kategori (control, opencv, tensorflow, vb.)
- `blockId`: Blok kimliği

### 3. Blok Kategorileri

#### Control (Kontrol Sistemleri)
- **MotorDriver**: Motor kontrolü
- **PID**: PID kontrol algoritması
- **Teleoperator**: Uzaktan kumanda

#### OpenCV (Bilgisayarlı Görü)
- **Camera**: Kamera görüntü yakalama
- **Blur**: Görüntü bulanıklaştırma
- **ColorFilter**: Renk filtreleme
- **EdgeDetector**: Kenar algılama
- **FaceDetector**: Yüz tanıma
- **Threshold**: Eşikleme

#### ROS-Sensors (Robot Sensörleri)
- **IMU**: Atalet ölçüm birimi
- **Odometer**: Mesafe sensörü
- **ROS2Camera**: ROS2 kamera entegrasyonu
- **LaserScan**: LIDAR sensörü

#### TensorFlow (Makine Öğrenmesi)
- **ObjectDetector**: Nesne algılama

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18+)
- npm veya yarn

### Kurulum
```bash
# Projeyi klonla
git clone [repository-url]
cd offboard.studio.components.store

# Bağımlılıkları yükle
npm install

# Geliştirme ortamında çalıştır
npm run start:dev

# Production build
npm run build
npm run start:prod
```

### Kullanılabilir Komutlar
```bash
# Geliştirme
npm run start:dev          # Watch mode ile çalıştır
npm run start:debug        # Debug mode

# Test
npm run test               # Unit testler
npm run test:e2e          # End-to-end testler
npm run test:cov          # Test coverage

# Code Quality
npm run lint              # ESLint ile kod kontrolü
npm run format            # Prettier ile kod formatla
```

## 📚 API Dokümantasyonu

Uygulama çalıştırıldıktan sonra:
- **Swagger UI**: http://localhost:3000/docs
- **Redoc**: http://localhost:3000/redoc

### API Base URL
- Development: http://localhost:3000/api
- Production: [Vercel deployment URL]/api

## 🛠️ Geliştirme

### Yeni Blok Ekleme

1. **JSON Blok Dosyası**: `src/assets/collection/[category]/` altına blok JSON dosyasını ekle
2. **Collection Factory**: `collection_factory.ts` dosyasında blok tanımını güncelle
3. **Test**: API endpoint'ini test et

### Blok JSON Yapısı
```json
{
  "editor": {
    "id": "unique-id",
    "layers": [...],
    "version": "3.0"
  },
  "package": {
    "name": "BlockName",
    "version": "1.0.0",
    "description": "Block açıklaması",
    "author": "Geliştirici Adı"
  },
  "design": {
    "board": "Python3-Noetic",
    "graph": {
      "blocks": [...],
      "wires": [...]
    }
  }
}
```

## 🔧 Yapılandırma

### Environment Variables
```bash
PORT=3000                    # Sunucu portu
NODE_ENV=development         # Ortam (development/production)
```

### CORS Ayarları
Tüm origin'lere açık (`origin: '*'`)

### Webpack Konfigürasyonu
Swagger UI static dosyaları için özel webpack config

## 🚀 Deployment

### Vercel
Proje Vercel'de otomatik deploy edilir:
- `vercel.json` konfigürasyon dosyası mevcut
- Build output: `dist/main.js`
- Static dosyalar otomatik serve edilir

### Manual Deployment
```bash
npm run build
node dist/main.js
```

## 📊 Proje Özellikleri

### Teknik Özellikler
- **TypeScript**: Full type safety
- **Modüler Yapı**: NestJS module sistemi
- **API Documentation**: Otomatik Swagger/Redoc
- **Error Handling**: Merkezi hata yönetimi
- **CORS Support**: Cross-origin resource sharing
- **Static File Serving**: Swagger UI assets

### Performans
- Lazy loading ile optimize edilmiş module yükleme
- Efficient file system operations
- Cached JSON responses

### Güvenlik
- CORS politikaları
- Input validation
- Error sanitization

## 🧪 Test Yapısı

```bash
test/
├── app.e2e-spec.ts         # End-to-end testler
└── jest-e2e.json           # E2E test konfigürasyonu

src/
└── app.controller.spec.ts   # Unit testler
```

## 📝 Lisans

Bu proje özel lisansa sahiptir (UNLICENSED).

## 👥 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'i push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📞 İletişim

Bu proje Offboard Studio ekibi tarafından geliştirilmektedir.

---

*Bu README dosyası projenin mevcut durumunu yansıtmaktadır ve geliştirme sürecinde güncellenecektir.*