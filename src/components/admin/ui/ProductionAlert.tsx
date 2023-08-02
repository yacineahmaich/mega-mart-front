function ProductionAlert() {
  return (
    <section className="w-full py-4 pl-8 text-lg text-center bg-yellow-100 shadow-sm">
      <span>
        <span className="mr-4">👋</span>
        Data mutations (create, update, delete) are desactivated.
        <span className="ml-1 text-primary-500">
          Clone the project repository from here
        </span>
        <span className="align-text-bottom"> 👉</span>
        <a
          href="https://github.com/yacineahmaich/mega-mart-front"
          title="https://github.com/yacineahmaich/mega-mart-front"
        >
          🔗
        </a>
      </span>
    </section>
  )
}

export default ProductionAlert
