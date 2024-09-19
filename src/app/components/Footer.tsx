export default function Footer() {
    const year = new Date().getFullYear()
    return (
      <footer className="text-center py-4">
        <p>&copy; {year} DishCovery. All rights reserved.</p>
      </footer>
    )
  }