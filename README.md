# Notes

- Tailwind only accept `.js` files, not `.jsx` files

# Setup Huge icons

https://docs.hugeicons.com/installation/react-package-installation

# A list of CSS properties that can typically be transitioned:

## Box Model

```
width
height
max-width
max-height
min-width
min-height
margin
padding
border-width
border-color
border-spacing
border-radius
outline-color
outline-offset
outline-width
```

## Background and Borders

```
background-color
background-image
background-position
background-size
background-repeat
border-color
border-radius
box-shadow
```

## Text

```
color
font-size
font-weight
letter-spacing
line-height
text-decoration-color
text-shadow
word-spacing
```

## Positioning

```
top
right
bottom
left
z-index
```

## Transforms

```
transform
transform-origin
```

## Opacity

```
opacity
```

## Visibility

```
visibility
```

## Flexbox and Grid

```
flex
flex-grow
flex-shrink
flex-basis
order
grid-template-columns
grid-template-rows
grid-column-gap
grid-row-gap
```

## Clip

```
clip
clip-path
```

## Miscellaneous

```
filter
perspective
perspective-origin
scroll-margin
scroll-padding
scroll-margin-top
scroll-margin-right
scroll-margin-bottom
scroll-margin-left
scroll-padding-top
scroll-padding-right
scroll-padding-bottom
scroll-padding-left
scroll-snap-align
```

# Breakpoints

Breakpoint prefix Minimum width CSS
sm 640px @media (min-width: 640px) { ... }
md 768px @media (min-width: 768px) { ... }
lg 1024px @media (min-width: 1024px) { ... }
xl 1280px @media (min-width: 1280px) { ... }
2xl 1536px @media (min-width: 1536px) { ... }

# Font size in this app

big4, h1 -> desktop: 6xl, phone: 5xl
big3, h2 -> desktop: 4xl, phone: 3xl
big2, h3 -> desktop: 2xl, phone: xl
big1, h4 -> desktop: xl, phone: lg
base -> desktop: lg, phone: base
small_1 -> desktop: base, phone: sm
small_2 -> desktop: sm, phone: xs
