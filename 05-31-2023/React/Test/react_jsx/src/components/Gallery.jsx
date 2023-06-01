import './Gallery.css'

// shortcut --> sfc und ihr erstellt euch eine function für die component
const Gallery = () => {
    return (
        <section className="gallery">
            <img src="https://unsplash.it/200/200?1" alt="" />
            <img src="https://unsplash.it/200/200?2" alt="" />
            <img src="https://unsplash.it/200/200?3" alt="" />
            <img src="https://unsplash.it/200/200?4" alt="" />
        </section>
    );
}

export default Gallery;