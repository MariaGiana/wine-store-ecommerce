# 🍷 MalbecNord - Angular Wine E-Commerce

<div align="center">
  <img src="https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png" width="200" alt="Angular Logo">
  <br>
  <p><strong>SPA built with Angular 19 & TypeScript</strong></p>
</div>

---

## 🚀 Live Demo / Demo en Vivo
🌐 **[Explore the application live here / Explora la aplicación en vivo aquí](TU_ENLACE_DE_DEPLOY_AQUÍ)**

---

## 📄 Description & Purpose / Descripción y Objetivo

| 🇪🇸 Español | 🇺🇸 English |
| :--- | :--- |
| Este proyecto es una aplicación web para la venta de vinos importados de Argentina en Dinamarca, nacida como colaboración para un emprendimiento real en Europa. El objetivo principal es consolidar el desarrollo de una **Single Page Application (SPA)** robusta y escalable con Angular. | This project is a web application for selling imported Argentine wines in Denmark, born as a collaboration for a real startup in Europe. The main goal is to consolidate the development of a robust and scalable **Single Page Application (SPA)** using Angular. |

---

## ✨ Key Features / Características Principales

| 🇪🇸 Español | 🇺🇸 English |
| :--- | :--- |
| 📦 **Catálogo Dinámico:** Lista completa de vinos con control y validación de stock disponible. | 📦 **Dynamic Catalog:** Full list of available wines with live stock control and validation. |
| 🔍 **Detalle de Producto:** Información técnica y notas de cata de cada vino. | 🔍 **Product Details:** Technical info and tasting notes for each specific bottle. |
| 🛒 **Carrito Reactivo:** Gestión de compras en tiempo real (agregar, calcular totales y cantidades). | 🛒 **Reactive Cart:** Real-time shopping cart management (add items, live totals, and quantity calculation). |
| 📬 **Formulario de Contacto:** Validaciones en tiempo real para el envío seguro de consultas. | 📬 **Contact Form:** Reactive form with real-time validations for customer inquiries. |

---

## 🛠️ Technical Implementation / Implementación Técnica

| 🇪🇸 Español | 🇺🇸 English |
| :--- | :--- |
| Este proyecto demuestra el dominio de los siguientes conceptos clave del ecosistema de Angular: | This project demonstrates proficiency in the following core concepts of the Angular ecosystem: |

* **Components & Databinding:** * 🇪🇸 Estructura modular de UI con comunicación eficiente (`@Input()`, `@Output()`).
  * 🇺🇸 Modular UI structure with efficient component communication (`@Input()`, `@Output()`).
* **Services & State Management:** * 🇪🇸 Uso de servicios inyectables (`wine-cart.service.ts`, `wine-data.service.ts`) para centralizar la lógica de negocio.
  * 🇺🇸 Use of injectable services (`wine-cart.service.ts`, `wine-data.service.ts`) to centralize business logic.
* **RxJS & Observables:** * 🇪🇸 Manejo del estado del carrito de compras de forma reactiva y asíncrona.
  * 🇺🇸 Reactive and asynchronous shopping cart state management.
* **Angular Routing:** * 🇪🇸 Sistema de navegación limpio entre secciones (`/wines-list`, `/wine-detail/:id`, `/contact`, `/malbecnord-cart`).
  * 🇺🇸 Clean navigation system between views (`/wines-list`, `/wine-detail/:id`, `/contact`, `/malbecnord-cart`).
* **Reactive Forms:** * 🇪🇸 Formularios avanzados con validaciones en tiempo real del lado del cliente.
  * 🇺🇸 Advanced forms with real-time client-side validations.
  
---

## 📂 Project Structure / Estructura del Proyecto

Basado en el patrón de diseño modular de Angular / *Based on Angular's modular design pattern:*

```text
src/
├── app/
│   ├── form-contact/              # Contact form component (Reactive)
│   ├── input-integer/             # Reusable custom quantity selector
│   ├── malbecnord-about/          # "About Us" section component
│   ├── malbecnord-cart/           # Shopping cart layout & logic
│   ├── malbecnord-principal/      # Home page layout
│   ├── wine-detail/               # Individual wine detail viewer
│   ├── wines-list/                # Main wine catalog view
│   ├── customers-messages.service.ts # Service for contact logs
│   ├── wine-cart.service.ts       # Reactive state service for the shopping cart
│   └── wine-data.service.ts       # Data fetch & stock validation service
```

---


## 🚀 Local Installation / Instalación Local  

| 🇪🇸 Español | 🇺🇸 English |
| :--- | :--- |
| Si quieres clonar y ejecutar este proyecto localmente, sigue estos sencillos pasos: | To clone and run this project locally, follow these simple steps: |

### 1. Clone the repository / Clonar el repositorio
```bash
git clone [https://github.com/MariaGiana/wine-store-angular.git](https://github.com/MariaGiana/wine-store-angular.git)
cd wine-store-angular 
```  
### 2. Install dependencies / Instalar dependencias  
```bash
npm install
```  
### 3. Run the development server / Levantar el servidor local
```bash
ng serve
```  
  
### 💡 Next Step / Próximo Paso: 
> **English:** Open your browser and navigate to `http://localhost:4200/` to see the app running live.  
> **Español:** Abre tu navegador y navega a `http://localhost:4200/` para ver la aplicación corriendo en vivo.