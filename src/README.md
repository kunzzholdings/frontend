# 项目架构说明

## 📁 文件夹结构

```
/src
├── components/
│   ├── common/           # 可复用的UI组件
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Navbar.jsx
│   ├── sections/        # 主要页面区块
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── MenuSelectionSection.jsx
│   │   ├── ValuesSection.jsx
│   │   └── ExampleSection.jsx
│   └── animations/      # 动画组件
│       ├── FloatingElements.jsx
│       └── ScrollIndicator.jsx
├── styles/              # 自定义CSS文件
│   ├── animations.css  # 动画关键帧和过渡
│   ├── layout.css      # 布局和定位工具
│   └── theme.css       # 主题变量和工具类
└── config/
    └── images.js       # 图片资源配置
```

## 🎨 样式架构原则

### Tailwind CSS 用于：
- **布局系统**: `flex`, `grid`, `gap`, `p`, `m` 等
- **响应式设计**: `sm:`, `md:`, `lg:`, `xl:` 断点
- **基础样式**: `text-*`, `bg-*`, `border-*` 等
- **主题一致性**: 使用 `tailwind.config.js` 中的颜色系统

### 自定义 CSS 用于：
- **精确定位**: `translate(49%)`, 像素级调整
- **复杂动画**: GSAP 动画, keyframes, 多状态控制
- **艺术效果**: 玻璃效果, 渐变, 阴影
- **交互状态**: `:hover`, `:active`, `:focus` 复杂效果

## 🧩 组件设计模式

### 1. 基础组件 (common/)
```jsx
// 使用 Tailwind 进行基础布局
<div className="flex items-center justify-center p-4">
  {/* 使用自定义 CSS 进行精确控制 */}
  <div className="glass-effect hover-lift">
    {/* 内容 */}
  </div>
</div>
```

### 2. 区块组件 (sections/)
```jsx
// 导入必要的样式文件
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';

// 使用 Tailwind 进行结构布局
<section className="relative min-h-screen flex-center overflow-hidden">
  {/* 使用自定义类进行艺术效果 */}
  <div className="glass-effect animate-fade-in">
    {/* 内容 */}
  </div>
</section>
```

### 3. 动画组件 (animations/)
```jsx
// 结合 GSAP 和 CSS 动画
useEffect(() => {
  gsap.to(elementRef.current, {
    // GSAP 动画属性
  });
}, []);
```

## 🎯 最佳实践

### 1. 样式导入顺序
```jsx
// 1. 导入 Tailwind 基础
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';
```

### 2. 类名组合
```jsx
// Tailwind 基础 + 自定义类
className="flex items-center justify-center glass-effect hover-lift"
```

### 3. 响应式设计
```jsx
// 使用 Tailwind 响应式类
className="text-sm md:text-lg lg:text-xl"
```

### 4. 动画控制
```jsx
// 避免 Tailwind transform 与 GSAP 冲突
// ❌ 不要同时使用
className="translate-x-4" // Tailwind
// 和
gsap.to(element, { x: 100 }) // GSAP

// ✅ 使用自定义 CSS 或纯 GSAP
className="custom-transform"
```

## 🛠️ 开发指南

### 创建新组件
1. 确定组件类型 (common/sections/animations)
2. 导入必要的样式文件
3. 使用 Tailwind 进行基础布局
4. 使用自定义 CSS 进行艺术效果
5. 避免 Tailwind transform 与 GSAP 冲突

### 添加新样式
1. **动画效果** → `src/styles/animations.css`
2. **布局工具** → `src/styles/layout.css`
3. **主题变量** → `src/styles/theme.css`

### 性能优化
- 使用 CSS 变量进行主题切换
- 合理使用 `will-change` 属性
- 避免过度使用 `backdrop-filter`
- 使用 `transform` 和 `opacity` 进行动画

## 📝 示例用法

### 按钮组件
```jsx
<Button variant="primary" size="lg" className="hover-lift">
  点击我
</Button>
```

### 卡片组件
```jsx
<Card variant="glass" hover className="p-8">
  <h3>标题</h3>
  <p>内容</p>
</Card>
```

### 动画效果
```jsx
<div className="animate-fade-in hover-lift">
  动画内容
</div>
```

这个架构确保了代码的可维护性、可扩展性和性能优化，同时保持了 Tailwind CSS 和自定义 CSS 的完美平衡。
