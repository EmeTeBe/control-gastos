# 💰 Control de Gastos - Gestor Financiero Personal

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-06B6D4?logo=tailwindcss&logoColor=white)

Una aplicación moderna y responsive para gestionar tus gastos personales, desarrollada con React, TypeScript y Tailwind CSS.

## ✨ Características Principales

- ➕ **Agregar gastos** con categorías personalizadas
- 🗑️ **Eliminar gastos** con gestos tipo iOS (swipe + confirmación)
- 📊 **Estadísticas visuales** de tus gastos por categoría
- 💾 **Persistencia local** con localStorage
- 📱 **Diseño responsive** optimizado para móviles
- 🎯 **Gestión de estado** avanzada con useReducer + Context API

## 🛠️ Stack Tecnológico

### **Frontend**
- **React 18** + **TypeScript** - Componentes y tipado estático
- **Tailwind CSS 4** - Estilizado utility-first
- **Vite** - Build tool y dev server
- **React Swipeable List** - Gestos tipo iOS para acciones

### **Gestión de Estado**
- **useReducer** - Estado complejo y predecible
- **Context API** - Evita prop drilling
- **Hooks personalizados** - Lógica reutilizable

## 📁 Estructura del Proyecto
src/
├── components/
│ ├── ExpenseForm.tsx # Formulario para agregar gastos
│ ├── ExpenseList.tsx # Lista con gestos swipe
│ ├── ExpenseStats.tsx # Estadísticas y gráficos
│ ├── BudgetAlert.tsx # Alertas de presupuesto
│ └── CategoryBadge.tsx # Badges de categorías
├── context/
│ ├── BudgetContext.tsx # Provider principal
│ └── BudgetReducer.ts # Lógica del reducer
├── hooks/
│ └── useBudget.ts # Hook personalizado del context
├── helpers/
│ └── index.ts # Utilidades (formato moneda, fechas)
├── types/
│ └── index.ts # Definiciones de TypeScript
└── data/
└── categories.ts # Categorías predefinidas

text

## 🎯 Funcionalidades Implementadas

### **Gestión de Gastos**
- Agregar gastos con descripción, monto, categoría y fecha
- Eliminar gastos con confirmación por gestos
- Validación en tiempo real de formularios
- Categorías predefinidas (Comida, Transporte, Ocio, etc.)

### **Estadísticas y Análisis**
- Total gastado por categoría
- Porcentaje del presupuesto utilizado
- Gráfico visual de distribución de gastos
- Filtrado por fechas y categorías

### **Experiencia de Usuario**
- **Gestos iOS**: Swipe + tap para confirmar eliminación
- **Responsive design**: Optimizado para móvil y desktop
- **Feedback visual**: Estados de carga y confirmación
- **Persistencia**: Datos guardados automáticamente