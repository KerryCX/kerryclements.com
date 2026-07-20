import { useEffect } from 'react'
import styles from './ClaudeStylist.module.css'
import './../../styles/personal-scope.css'

const CANONICAL_URL = 'https://kerryclements.com/personal/claude-personal-stylist'

const ClaudeStylist = () => {
  useEffect(() => {
    document.title = 'I Asked Claude to Be My Personal Stylist for a Day — Kerry Clements'

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = CANONICAL_URL

    return () => {
      document.title = 'Kerry Clements'
    }
  }, [])

  return (
    <div className={`personal-scope ${styles.claudeStylist}`}>
      <main className={styles.content}>
        <a href="/personal" className={styles.backLink}>
          ← Back to personal
        </a>

        <span className={styles.eyebrow}>hot mess to healthy</span>
        <h1 className={styles.title}>I Asked Claude to Be My Personal Stylist for a Day</h1>
        <p className={styles.meta}>
          I couldn't afford the £1,000 AI makeover app, so I asked Claude instead · July 2026
        </p>

        <p className={styles.paragraph}>
          Today I came across an advert on Instagram for a service where you send in your photo and
          they show you how you could improve yourself, change your hair, add a beard if that's your
          thing, that sort of makeover concept. I clicked through out of curiosity and saw the
          price, around a thousand pounds. I thought, I can't afford that. But it got me thinking:
          what if I just asked Claude instead? Basically, I hired myself a free personal stylist for
          the afternoon.
        </p>

        <figure className={`${styles.figure} ${styles.figureSmall}`}>
          <img
            className={styles.figureImage}
            src="/images/stylist-no-makeup.jpg"
            alt="Kerry, no make up, 12 days post CO2 laser"
          />
          <figcaption className={styles.figureCaption}>
            Me, no make up, 12 days post CO2 laser, so a bit pink :-)
          </figcaption>
        </figure>

        <h2 className={styles.sectionHeading}>Where this all really began</h2>
        <p className={styles.paragraph}>
          The timeline is worth laying out properly. It started when I first went to Quinn Clinics
          about my acne scars. They told me I had too much inflammation at the time, so I had to
          pause and come back a few months later. In that gap, I booked a consultation with another
          of their doctors, to ask what I could do in the meantime, and that's where I got the
          suggestions for lip filler, nose filler, and chin filler. In the end I decided on Botox
          instead.
        </p>
        <p className={styles.paragraph}>
          Fast forward two years, and that's when I finally had the CO2 laser done, after various
          other treatments there in between. In the last year, I've also had my nano{' '}
          <a href="https://www.bristolbrowembroidery.co.uk/" target="_blank" rel="noreferrer">
            brows
          </a>{' '}
          done and an{' '}
          <a
            href="https://www.facebook.com/share/1DEwyM9h4H/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            eyelash tint
          </a>
          , though both of those have faded or worn off since.
        </p>

        <h2 className={styles.sectionHeading}>The hypothetical</h2>
        <p className={styles.paragraph}>
          So this brings us to now, two years on from that first Quinn Clinics appointment and just
          days after the CO2 laser itself. Here's the thing, this was really a hypothetical exercise
          for me. If hypothetically money was no object, what could I actually do? I was half
          expecting a facelift to come up in the suggestions, though maybe that's a step too far for
          where I'm at right now. In reality, I can't currently afford everything on my wish list,
          so this became less about an unlimited budget and more about working out what I can
          actually do, prioritise, or find cheaper alternatives for in the meantime.
        </p>

        <h2 className={styles.sectionHeading}>So I asked Claude</h2>
        <p className={styles.paragraph}>
          I uploaded a photo and asked what I could do to look more youthful, more beautiful. I want
          to be clear that wasn't me putting myself down, I was just curious.
        </p>
        <p className={styles.paragraph}>
          Claude pointed out I had some redness in my face and suggested laser treatment, among
          other things. I mentioned I'd actually just had CO2 laser done recently, which explained
          the redness. Fair enough.
        </p>
        <p className={styles.paragraph}>
          Then it mentioned my under-eyes were starting to hollow out. I didn't really know much
          about that. It talked me through some options, filler being one, though I'm a bit nervous
          about that particular treatment. I do know where I'd go if I ever did it though, Quinn
          Clinics, the same place I had my CO2 laser. I trust them completely, they don't just take
          your money, they actually make sure you're getting the right treatment for you.
        </p>

        <h2 className={styles.sectionHeading}>The age question</h2>
        <p className={styles.paragraph}>
          I also asked Claude how old it thought I looked. I'll admit that was a bit of a nervous
          question, I think part of me was scared it might say something like "you look like you're
          in your seventies." But it wouldn't guess, it doesn't estimate ages from photos, full
          stop. What it did say was that the concerns I'd flagged, like the forehead lines, the
          elevens between my brows, and the under-eye hollowing, are pretty normal for people in
          their late thirties to forties, and that they respond well to what I'm already doing.
        </p>
        <p className={styles.paragraph}>
          I get told I look younger than I am quite a lot of the time. Usually I just laugh it off,
          say "yeah, whatever." But if I'm honest, some days I think I look younger than I am, and
          other days I think I look older. It varies.
        </p>

        <h2 className={styles.sectionHeading}>Hair and makeup suggestions</h2>
        <p className={styles.paragraph}>
          I also asked about hair and makeup. Claude gave me some genuinely useful pointers, from
          colour placement around my grey regrowth at the temples and parting, to which of my
          existing makeup products could help with redness and under-eye concerns, and where I might
          be falling short with products I don't currently own.
        </p>
        <p className={styles.paragraph}>
          A few products came up specifically that I thought were worth sharing here. These first
          three I already use and can vouch for:
        </p>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.lilylolo.co.uk/mineral-foundation-spf-15/"
              target="_blank"
              rel="noreferrer"
            >
              Lily Lolo Mineral Foundation
            </a>{' '}
            in China Doll, which is my shade, pale with neutral undertones
          </li>
          <li>
            <a
              href="https://www.lilylolo.co.uk/mineral-corrector/"
              target="_blank"
              rel="noreferrer"
            >
              Lily Lolo Mineral Corrector
            </a>{' '}
            in Blush Away, the green-tinted one that neutralises redness, handy for the CO2 recovery
          </li>
          <li>
            The Benefit Precisely My Brow Pencil in shade 3.5, which matched my hair colour well
          </li>
          <li>
            The{' '}
            <a
              href="https://www.lilylolo.co.uk/naked-pink-cheek-duo/"
              target="_blank"
              rel="noreferrer"
            >
              Lily Lolo Naked Pink Cheek Duo
            </a>
            , which I already owned, I asked whether I could use it for my under-eye hollowing
            rather than buying something new, and the shimmer shade does work as a subtle stopgap
            highlight there, though it's not a proper substitute for a dedicated concealer
          </li>
        </ul>
        <p className={styles.paragraph}>
          And this one's a future try, I haven't used it yet but it's on my list:
        </p>
        <ul className={styles.list}>
          <li>
            The{' '}
            <a
              href="https://www.jonesroadbeauty.com/products/the-neutralizer-pencil"
              target="_blank"
              rel="noreferrer"
            >
              Jones Road Neutralizer Pencil
            </a>{' '}
            for under-eye darkness, and the Face Pencil to go over it for hollowing
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>Hair colour and lashes</h2>
        <p className={styles.paragraph}>
          One thing that struck me was that when I asked about my hair colour, Claude basically told
          me I'm already doing pretty much the right thing. My{' '}
          <a
            href="https://www.facebook.com/share/184qTPEiG2/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            hairdresser
          </a>{' '}
          already does full head highlights specifically to blend the grey concentrated at my
          temples and parting, which is apparently the most common pattern for greying anyway. The
          main tweak suggested was asking for a few extra foils and some root shadow targeted right
          at those two zones, rather than a flat all-over touch-up, so it lasts longer between salon
          visits. I've got an appointment on Tuesday, so I'll update my page with a fresh photo once
          that's done.
        </p>
        <p className={styles.paragraph}>
          We also touched on lashes. I liked the idea of a "cat eye" or "kitten" style, extensions
          just on the outer corners to open up the eyes a bit, which would also pair nicely with the
          Botox I'm planning near those outer corners. Nothing dramatic, just a subtle lift. For a
          self-applied version of the same look, Ardell and Kiss both do half or "wispy corner"
          strip lashes cut to just the outer third of the lash line, or individual cluster lashes
          for even more control if you're happy applying them yourself. Either way, a proper lash
          glue like Duo or Ardell makes a real difference over the flimsy glue that comes in the
          box.
        </p>

        <h2 className={styles.sectionHeading}>The idealised version</h2>
        <p className={styles.paragraph}>
          Out of curiosity, I also had a go at generating an AI version of what an "idealised" me
          might look like. Claude doesn't do this kind of image creation, it won't generate or edit
          photos of real people, so I used Grok's free tier for this bit instead. The first attempt
          idolised me a bit too much, overly full brows and skin smoothed to the point of looking
          artificial, so I asked for the brows thinned out and some of that smoothness toned down to
          feel more like an aspirational version of my actual face rather than a completely
          different person. It was more like me, but still obviously looked like I had applied a
          snapchat filter.
        </p>

        <figure className={`${styles.figure} ${styles.figureSmall}`}>
          <img
            className={styles.figureImage}
            src="/images/stylist-grok-idealised.jpg"
            alt="Grok's idealised version of Kerry"
          />
          <figcaption className={styles.figureCaption}>Grok's idolised version of me</figcaption>
        </figure>

        <h2 className={styles.sectionHeading}>A word on facial exercise, diet, and collagen</h2>
        <p className={styles.paragraph}>
          I've read that facial exercises might help, the theory being that building facial muscle
          could support the bone underneath, similar to how exercise supports bone density elsewhere
          in the body. I'm not entirely sure how much truth there is to that one, but it's something
          I've come across.
        </p>
        <p className={styles.paragraph}>
          What I do believe more firmly is that looking after your diet in a way that supports your
          bones, and your collagen, makes a real difference. Getting enough calcium, vitamin D, and
          protein for bone health, and enough protein and vitamin C to support your body's own
          collagen production, feels like one of the more sensible, low-cost things I can actually
          control day to day.
        </p>

        <h2 className={styles.sectionHeading}>A note on Quinn Clinics</h2>
        <p className={styles.paragraph}>
          I want to give a proper mention to{' '}
          <a href="https://www.quinnclinics.co.uk/" target="_blank" rel="noreferrer">
            Quinn Clinics
          </a>
          , where I had my CO2 laser done. They've looked after me so well throughout, and I'm
          healing and improving really well since the treatment. I've had other treatments there
          before too, and honestly, they're my definite go-to place for anything I have done in the
          future. Trust matters a lot to me with this kind of thing, and they've earned it.
        </p>

        <figure className={`${styles.figure} ${styles.figureSmall}`}>
          <img
            className={styles.figureImage}
            src="/images/stylist-with-husband.jpg"
            alt="Kerry with her husband, a month before the CO2 laser"
          />
          <figcaption className={styles.figureCaption}>
            A month ago, with my husband, pre-CO2 with make up on, I am on the one of the left.
          </figcaption>
        </figure>

        <h2 className={styles.sectionHeading}>Where I'm at now</h2>
        <p className={styles.paragraph}>
          I don't think this urge to look my best is going away. Even once the CO2 recovery is done,
          I know I'll want to think about the next thing. But this whole experience has made me
          reflect on why appearance matters to me the way it does. I know it shouldn't matter so
          much, but I think there's something quite nice about wanting to be the best version of
          yourself, as long as it stays in perspective.
        </p>
        <p className={styles.paragraph}>
          For now, my plan is smaller and more realistic: improve my diet, always use sun
          protection, which with SPF 50 post CO2 is already non-negotiable, and save toward the
          treatments I actually want rather than rushing into anything. A follow-up down the line is
          still on the cards. But it starts with the basics.
        </p>
        <p className={styles.paragraph}>
          I'll be going into my skin journey in more detail in future posts, so consider this the
          light-hearted intro. I'll also add a photo of me after I've had my hair done on Tuesday.
        </p>

        <a href="/personal" className={styles.backLink}>
          ← Back to personal
        </a>
      </main>
    </div>
  )
}

export default ClaudeStylist
