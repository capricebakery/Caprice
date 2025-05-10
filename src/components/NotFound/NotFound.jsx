export default function NotFoundPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 px-6 py-12 sm:py-24 lg:px-8">
        <div className="text-center max-w-md">
          <img
            src="/img/bread404.jpeg" // Asegúrate de tener una imagen temática, o cámbiala por un emoji 🍞
            alt="Pan perdido feliz"
            className="mx-auto h-45 w-53 mb-6 mix-blend-multiply"
          />
          <p className="text-base font-semibold text-yellow-800">404 - Página no encontrada</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brown-900 sm:text-5xl">
            ¡Oh no! Se nos quemó la página
          </h1>
          <p className="mt-6 text-base leading-7 text-yellow-900">
            Parece que esta página se fue con el último lote de pan. Pero no te preocupes, tenemos más cosas deliciosas esperándote.
          </p>
          <div className="mt-10">
            <a
              href="/"
              className="text-sm font-semibold text-yellow-800 hover:text-yellow-600"
            >
              ← Volver a la panadería
            </a>
          </div>
        </div>
      </div>
    );
  }
  