import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <header className="main-header " >
                    <div className="vertical">
                        <div className="main-header-content inner">
                            <h1 className="page-title">Fashion Critiques</h1>
                            <div className="entry-title-divider">
                                <span></span><span></span><span></span>
                            </div>
                            <h2 className="page-description">Thoughts, reviews and ideas since 1999.</h2>
                        </div>
                    </div>
                    <Link className="scroll-down icon-arrow-left" to="#content" data-offset="-45"><span className="hidden">Scroll Down</span></Link>
                    </header>
                    <main id="content" className="content" role="main" />
                    <div className="wraps" >
                        <img src="./assets/img/shadow.png" className="wrapshadow" />
                        <div className="grid">
                            <div className="grid-item">
                                <article className="post">
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">Retro &amp; New</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        The house of Dr. Marsh being fully occupied, we made our beds in a shed, a short distance from it. Suspended from one of the poles <Link className="read-more" to="/retro-is-the-new-modern/">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    <time className="post-date" datetime="2016-12-18">18 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="post tag-romance">
                                <Link to="article.html"><img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j2-520x780-520x600.jpg" /></Link>
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">Dare to try, dare to explore</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        I noticed near the house a vegetable garden, with the usual variety of vegetables. In another inclosure was the commencement of an extensive vineyard, the fruit <Link className="read-more" to="article.html">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    on <Link to="#">romance</Link>
                                    <time className="post-date" datetime="2016-12-18">18 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="post">
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">Winter Collection</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        Having determined to deviate from our direct course, in order to visit the rancho of Dr. Marsh, we parted from Messrs. McKee and Pickett about noon. <Link className="read-more" to="/winter-collection/">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    <time className="post-date" datetime="2016-12-18">18 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="post tag-romance">
                                <Link to="/having-a-first-chance/"><img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j5-520x780-520x600.jpg"/></Link>
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">Having a first chance</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        We arrived at the rancho of Dr. Marsh about 5 o'clock P.M., greatly fatigued with the day's ride. The residence of Dr. M. <Link className="read-more" to="/having-a-first-chance/">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    on <Link to="#">romance</Link>
                                    <time className="post-date" datetime="2016-12-18">18 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="post tag-romance featured">
                                <Link to="article.html"><img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j3-320x320.jpg" /></Link>
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">Trending Colors</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        Our horses were frightened last night by bears, and this morning, with the exception of those which were picketed, had strayed so far that we did <Link className="read-more" to="/trending-colors/">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    on <Link to="#">romance</Link>
                                    <time className="post-date" datetime="2016-12-18">18 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="post">
                                <Link to="article.html"><img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j8-520x780-520x600.jpg" /></Link>
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">What we saw in California</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        We commenced to-day our journey from New Helvetia to San Francisco. Our party consisted, including myself, of Colonel Russell, Dr. McKee of Monterey, Mr. Pickett, a <Link className="read-more" to="/what-we-saw-in-california/">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    <time className="post-date" datetime="2016-12-18">18 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="post tag-romance">
                                <Link to="article.html"><img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/30160348/sep4.jpg" /></Link>
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">Shadows &amp; Lights</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        Next day Marcolf proves all his statements. Thus, he places a pan of milk in a dark closet, and suddenly calls the king. Solomon steps into <Link className="read-more" to="/shadows/">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    on <Link to="#">romance</Link>
                                    <time className="post-date" datetime="2016-12-18">18 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="post featured">
                                <Link to="article.html"><img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j12-520x668-520x600.jpg" /></Link>
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">The Book of Delight</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        Joseph Zabara has only in recent times received the consideration justly due to him. Yet his "Book of Delight," finished about the year 1200, is more <Link className="read-more" to="/drinking-whenever-you-are-ready-or-even-if-youre-not/">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    <time className="post-date" datetime="2016-12-14">14 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="post">
                                <div className="wrapgriditem">
                                    <header className="post-header">
                                    <h2 className="post-title"><Link to="article.html">Fashion Teenager</Link></h2>
                                    </header>
                                    <section className="post-excerpt">
                                    <p>
                                        You must try to understand that when I finished school I was as raw as raw could be. I had never travelled anywhere on my own, <Link className="read-more" to="/reading-fashion-eating-books/">&raquo;</Link>
                                    </p>
                                    </section>
                                    <footer className="post-meta">
                                    <img className="author-thumb" src="./assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                                    <Link to="author.html">David</Link>
                                    <time className="post-date" datetime="2016-12-14">14 December 2016</time>
                                    </footer>
                                </div>
                                </article>
                            </div>
                        </div>        </div>
                        </div>
                        
                        
    )
}

export default Home
