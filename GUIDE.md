# Guide d'Utilisation - Site NGUEM'S YAFE

## 🎯 Objectif du Site

Site de présentation ultra-rapide pour attirer les visiteurs du salon Yafe vers le stand NGUEM'S.

## 📱 Sections du Site

### 1. Hero Section
- Présentation élégante de la marque
- Animations fluides d'entrée
- Bouton CTA vers le catalogue

### 2. Catalogue Interactif
- 3 produits phares : Lait Corporel, Crème Visage, Cologne
- Modales détaillées avec bienfaits
- Prix spéciaux salon Yafe (-15%)

### 3. Diagnostic Peau
- Quiz interactif en 2 étapes
- Recommandation personnalisée
- Incitation à visiter le stand

### 4. Témoignages & Localisation
- Slider de témoignages clients
- Plan interactif du Palais des Congrès
- Informations pratiques (Allée B - Stand 23)
- Bouton WhatsApp fixe

## 🚀 Installation et Lancement

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Construire pour production
npm run build

# Prévisualiser la production
npm run preview
```

## 🎨 Personnalisation

### Couleurs (tailwind.config.mjs)
- `nguems-gold`: #D4AF37 (or premium)
- `nguems-cream`: #F5F1E8 (fond clair)
- `nguems-dark`: #1A1A1A (texte principal)
- `nguems-brown`: #8B6F47 (accents)

### Images des Produits
Placez vos images optimisées (.webp) dans `/public/products/`:
- `lait.webp`
- `creme.webp`
- `cologne.webp`

### Numéro WhatsApp
Dans [WhatsAppButton.tsx](src/components/WhatsAppButton.tsx), ligne 5 :
```tsx
const phoneNumber = '237600000000'; // Remplacer par votre numéro
```

### Emplacement du Stand
Dans [ProofAndLocation.tsx](src/components/ProofAndLocation.tsx), modifier :
- Allée et numéro de stand
- Informations d'accès

## 📊 Performance

Le site est optimisé pour :
- ✅ Chargement < 2 secondes sur 3G
- ✅ Architecture Islands (JavaScript minimal)
- ✅ HTML statique pré-généré
- ✅ Animations GPU-optimisées (Framer Motion)
- ✅ Lazy loading des composants React

## 🎯 Stratégie d'Utilisation au Salon

1. **QR Code** : Générez un QR code pointant vers le site
2. **Scout** : Personnes avec tablette montrant le QR
3. **Pitch** : "Scannez pour découvrir votre profil beauté"
4. **Conversion** : Le diagnostic incite à visiter le stand

## 📱 Responsive

Le site est entièrement responsive :
- Mobile First design
- Optimisé pour les petits écrans
- Touch-friendly interactions

## 🔧 Dépendances Principales

- **Astro** : Framework ultra-rapide
- **React** : Composants interactifs
- **Framer Motion** : Animations fluides
- **Tailwind CSS** : Styling utilitaire
- **Lucide React** : Icônes légères

## 🚢 Déploiement sur Vercel

```bash
# Connecter à Vercel (première fois)
npm i -g vercel
vercel login

# Déployer
vercel --prod
```

Ou connectez votre repo GitHub à Vercel pour un déploiement automatique.

## ✨ Améliorations Futures

- [ ] Ajouter de vraies photos de produits
- [ ] Intégrer Google Analytics
- [ ] Ajouter un système de réservation d'échantillons
- [ ] Mode sombre
- [ ] Traductions FR/EN

## 📞 Support

Pour toute question, contactez via WhatsApp depuis le site !
