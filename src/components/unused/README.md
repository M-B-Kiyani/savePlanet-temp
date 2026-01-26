# Unused Components

This folder contains components that are not currently used in the HomePage but may be needed for future pages or features.

## Available Components

### Stats.jsx

- **Purpose**: Display statistics and metrics
- **Usage**: Can be used for showing impact numbers, user statistics, or project metrics
- **Potential Pages**: Dashboard, About page, Impact page

### Benefits.jsx

- **Purpose**: Showcase benefits or advantages
- **Usage**: Highlight benefits of carbon credits, platform features, or environmental impact
- **Potential Pages**: About page, Features page, Landing sections

### Educational.jsx

- **Purpose**: Educational content and resources
- **Usage**: Provide learning materials about carbon credits, climate change, or sustainability
- **Potential Pages**: Resources page, Learn page, Blog sections

### CTA.jsx (Call to Action)

- **Purpose**: Call-to-action sections
- **Usage**: Encourage user actions like signing up, purchasing, or engaging
- **Potential Pages**: Any page needing conversion elements

### Contact.jsx

- **Purpose**: Contact information and forms
- **Usage**: Contact details, contact forms, support information
- **Potential Pages**: Contact page, Support page, Footer sections

### Incentives.jsx

- **Purpose**: Display incentives or rewards
- **Usage**: Show rewards, discounts, or incentive programs
- **Potential Pages**: Rewards page, Membership page, Promotional sections

## How to Use These Components

1. **Import the component** you need:

   ```jsx
   import Stats from "../components/Stats.jsx";
   ```

2. **Add to your page**:

   ```jsx
   function MyPage() {
     return (
       <div>
         <Header />
         <Stats />
         <Footer />
       </div>
     );
   }
   ```

3. **Consider making them reusable** by following the pattern in `src/components/ui/` if they need customization.

## Future Refactoring

These components could be refactored to be more reusable by:

- Adding props for customization
- Moving to `src/components/ui/` folder
- Creating variants for different use cases
- Adding proper TypeScript types (if migrating to TypeScript)

## Component Status

| Component   | Status    | Last Used          | Potential Use          |
| ----------- | --------- | ------------------ | ---------------------- |
| Stats       | Available | HomePage (removed) | Dashboard, Impact page |
| Benefits    | Available | HomePage (removed) | About, Features page   |
| Educational | Available | HomePage (removed) | Resources, Learn page  |
| CTA         | Available | HomePage (removed) | Any conversion page    |
| Contact     | Available | HomePage (removed) | Contact, Support page  |
| Incentives  | Available | HomePage (removed) | Rewards, Promo page    |
