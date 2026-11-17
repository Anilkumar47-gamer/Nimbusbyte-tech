import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/Icons.jsx';

const sectors = [
  'Fintech',
  'Enterprise SaaS',
  'Industrial IoT',
  'Quality Engineering',
  'Cloud & FinOps',
  'Security & Compliance',
  'Other',
];

const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
const maxImageSize = 5 * 1024 * 1024;

function BlogUploadPage() {
  const [title, setTitle] = useState('');
  const [sector, setSector] = useState(sectors[0]);
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState('');
  const [drafts, setDrafts] = useState([]);
  const imageUrls = useRef([]);

  useEffect(() => () => {
    imageUrls.current.forEach(url => URL.revokeObjectURL(url));
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    setImageError('');
    setImage(null);

    if (!file) return;

    const isSvg = file.name.toLowerCase().endsWith('.svg');
    if (!allowedImageTypes.includes(file.type) && !isSvg) {
      setImageError('Choose an SVG, PNG, JPG, WEBP, or GIF image.');
      event.target.value = '';
      return;
    }

    if (file.size > maxImageSize) {
      setImageError('Choose an image smaller than 5 MB.');
      event.target.value = '';
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    imageUrls.current.push(imageUrl);
    setImage({ name: file.name, url: imageUrl });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!image) {
      setImageError('Add a cover image to create a blog draft.');
      return;
    }

    setDrafts(previous => [{
      id: `${Date.now()}-${title}`,
      title: title.trim(),
      sector,
      summary: summary.trim(),
      content: content.trim(),
      image,
      createdAt: new Date().toLocaleString(),
    }, ...previous]);
    setTitle('');
    setSector(sectors[0]);
    setSummary('');
    setContent('');
    setImage(null);
    setImageError('');
    event.currentTarget.reset();
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Upload Blogs</span>
            </div>
            <div className="eyebrow">Sector Blog Editor</div>
            <h1>Create a blog draft for your sector.</h1>
            <p className="lead">
              Add a title, sector, article copy, and an SVG or image cover. Drafts and previews stay in this browser session.
            </p>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/work-visual.svg"
              alt="Illustration of NimbusByte software projects"
              className="hero-main-img"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap blog-editor-layout">
          <form className="card blog-editor-form" onSubmit={handleSubmit}>
            <div className="eyebrow">New blog draft</div>
            <h2>Blog details</h2>

            <div className="form-field">
              <label htmlFor="blog-title">Blog title <strong>*</strong></label>
              <input
                id="blog-title"
                name="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
                maxLength={120}
                placeholder="Write a clear, specific title"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="blog-sector">Sector <strong>*</strong></label>
              <select
                id="blog-sector"
                name="sector"
                value={sector}
                onChange={event => setSector(event.target.value)}
                required
              >
                {sectors.map(item => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="blog-summary">Short summary <strong>*</strong></label>
              <textarea
                id="blog-summary"
                name="summary"
                value={summary}
                onChange={event => setSummary(event.target.value)}
                maxLength={240}
                placeholder="A short introduction shown with the blog"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="blog-content">Blog content <strong>*</strong></label>
              <textarea
                id="blog-content"
                name="content"
                className="blog-content-input"
                value={content}
                onChange={event => setContent(event.target.value)}
                placeholder="Write your article content"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="blog-image">Cover image (SVG or image) <strong>*</strong></label>
              <input
                id="blog-image"
                name="image"
                type="file"
                accept=".svg,image/svg+xml,image/png,image/jpeg,image/webp,image/gif"
                onChange={handleImageChange}
                aria-describedby={imageError ? 'blog-image-error' : 'blog-image-help'}
                required
              />
              <p className="form-note" id="blog-image-help">SVG, PNG, JPG, WEBP, or GIF · up to 5 MB</p>
              {imageError && <p className="blog-upload-error" id="blog-image-error" role="alert">{imageError}</p>}
            </div>

            {image && (
              <div className="blog-image-preview">
                <img src={image.url} alt={`Preview of ${image.name}`} />
                <span>{image.name}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary">
              Add draft <ArrowRightIcon size={14} className="btn-arrow" />
            </button>
            <p className="blog-editor-note">This creates a local preview only. It does not publish or upload content to a server.</p>
          </form>

          <section className="blog-drafts" aria-labelledby="blog-drafts-heading">
            <div className="section-head">
              <div className="eyebrow">Browser session</div>
              <h2 id="blog-drafts-heading">Blog drafts <span className="blog-draft-count">{drafts.length}</span></h2>
              <p>New drafts appear here while this page stays open.</p>
            </div>

            {drafts.length === 0 ? (
              <div className="card blog-drafts-empty">
                <div className="icon-node" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 16V4m0 0L7 9m5-5 5 5" />
                    <path d="M20 16.5v2A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-2" />
                  </svg>
                </div>
                <h3>No drafts yet</h3>
                <p>Complete the form to preview a sector blog draft here.</p>
              </div>
            ) : (
              <div className="blog-draft-list">
                {drafts.map(draft => (
                  <article className="card blog-draft-card" key={draft.id}>
                    <img src={draft.image.url} alt="" className="blog-draft-cover" />
                    <div className="blog-draft-copy">
                      <span className="tag">{draft.sector} · DRAFT</span>
                      <h3>{draft.title}</h3>
                      <p className="blog-draft-date">{draft.createdAt}</p>
                      <p>{draft.summary}</p>
                      <details>
                        <summary>Read draft</summary>
                        <p className="blog-draft-content">{draft.content}</p>
                      </details>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}

export default BlogUploadPage;
