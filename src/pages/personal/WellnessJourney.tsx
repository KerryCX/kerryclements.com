import { useEffect } from 'react'
import styles from './WellnessJourney.module.css'

const CANONICAL_URL = 'https://kerryclements.com/personal/wellness-journey'

const WellnessJourney = () => {
  useEffect(() => {
    document.title = 'My Wellness Journey: Sleep — Kerry Clements'

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
    <div className={`personal-scope ${styles.wellness}`}>
      <main className={styles.content}>
        <a href="/personal" className={styles.backLink}>
          ← Back to personal
        </a>

        <span className={styles.eyebrow}>hot mess to healthy · my wellness journey</span>
        <h1 className={styles.title}>Sleep</h1>
        <p className={styles.meta}>July 2026</p>

        <p className={styles.paragraph}>
          Welcome to my health and wellness journey. I'm working to improve my own health and that
          of my family. It's not about perfection or quick fixes, it's about understanding what
          actually matters. Not simply hacks or fad diets, resulting in me returning to my usual bad
          habits, but changes that stick.
        </p>

        <p className={styles.paragraph}>
          I am always questioning things, and over the years have done lots of research, finding
          ways that help us to live healthier, happier lives, like reducing added sugar and cutting
          out trans fats from my diet. However putting changes into practice, putting the research
          to use, hasn't really happened. Some of it has, but not enough, and I find myself
          researching endlessly, a bit of an addiction.
        </p>

        <p className={styles.paragraph}>
          So I want to start putting these practical, healthy ways of living into practice, one step
          at a time, with purpose.
        </p>

        <p className={styles.paragraph}>
          So, step one. I'd been looking into fasting as a way to support autophagy, the body's
          process for clearing out damaged cells. But the more I read, the more it became clear that
          autophagy isn't just switched on by fasting, deep sleep and exercise support it too.
          That's what tipped it for me. If my sleep isn't sorted, I'm undermining the very thing I
          was trying to fast my way into. So sleep is where I'm starting, because once that's
          sorted, everything else becomes easier.
        </p>

        <figure className={styles.figure}>
          <img
            className={styles.figureImage}
            src="/images/sleepy-eyes.jpg"
            alt="My daughter's sleepy eyes"
          />
        </figure>

        <h2 className={styles.sectionHeading}>Where I'm At With My Sleep</h2>

        <h3 className={styles.subHeading}>Summer Nights</h3>
        <p className={styles.paragraph}>
          In summer, I feel like I need less sleep. When it's still light outside at 10pm, it's hard
          to switch off, I don't really want to sleep yet, and I often get a second wind of energy
          just as I should be winding down. Then, on the other end, I find it hard to stay asleep
          once the sun's come up. Thankfully, I do usually manage to sleep until around 6am, if the
          cat and dog allow it.
        </p>

        <h3 className={styles.subHeading}>Wind-Down Time</h3>
        <p className={styles.paragraph}>
          It's not that I don't get any me time otherwise, I do. But the wind-down period before
          sleep is when I want it to still feel like mine, not just a clinical "now do your sleep
          hygiene routine" block. That's part of why cutting out screens entirely felt hard, giving
          up something that felt like a small reward at the end of the day, even if it wasn't
          helping.
        </p>
        <p className={styles.paragraph}>
          YouTube podcasts (with the screen off) have been my go-to, but a lot of them are still
          mentally engaging, which isn't really what I want right before sleep. I manage to drift
          off while listening to these videos, but is it a good way to go to sleep, especially if
          the subject is topical.
        </p>

        <h3 className={styles.subHeading}>Night Terrors</h3>
        <p className={styles.paragraph}>
          I'll often wake up an hour or two into sleep from a night terror. When people hear "night
          terrors," they probably picture waking up screaming. Mine are different, more like the
          dream doesn't fully let go when I wake up. Sometimes I'm convinced the frightening thing
          from my dream is actually there in the bedroom or somewhere in the house, right in front
          of me, and I'll wake my husband before realising I was still asleep. Other times I'll wake
          up certain someone's broken into the house, or that I've forgotten something urgent, and
          it takes a minute or two to fully separate that from reality.
        </p>

        <h3 className={styles.subHeading}>Antidepressants</h3>
        <p className={styles.paragraph}>
          Like many people, I've been taking my sertraline before bed, mostly because that's when I
          reliably remember to take it. But looking into the research, evening dosing might actually
          be working against me. Sertraline has activating properties that can interfere with sleep
          if taken in the evening, and it changes sleep architecture directly. One study found it
          reduces REM sleep and increases deep sleep early in the night, which is exactly the kind
          of shift that could be tangled up with my night terrors and the low deep sleep numbers my
          watch has been showing.
        </p>

        <h3 className={styles.subHeading}>GPs and Doing My Own Research</h3>
        <p className={styles.paragraph}>
          If you're lucky enough to have a GP who has the time and inclination to talk through
          something like medication timing, it's worth giving them a call. But if your experience of
          NHS GPs has been anything like mine, quick and stretched, geared toward the most urgent
          cases rather than the fine details of sleep, you might find it easier to do the groundwork
          yourself first. I'd still recommend a quick check with a pharmacist or your GP before
          actually changing when you take anything, just to rule out anything specific to your
          situation.
        </p>

        <h3 className={styles.subHeading}>Tracking It</h3>
        <p className={styles.paragraph}>
          I started tracking my sleep with my Apple Watch a while back, and it confirmed what I
          suspected: I'm not getting much deep sleep.
        </p>
        <p className={styles.paragraph}>
          This is part of why sleep feels different to me now than it did in my 20s and 30s. Sleep
          architecture naturally shifts with age, less deep sleep, more fragmentation, so there's
          less room for error than there used to be. And I notice the knock-on effects clearly: when
          I'm tired, it changes what I eat, I reach for easier, more sugary options rather than
          making better choices, and it pushes me toward more screen time too, which just feeds the
          same cycle that caused the poor sleep in the first place. It even changes my morning
          routine. On a good night's sleep I'll have water first thing and coffee after breakfast,
          but on a bad night, it's coffee immediately, before I've even properly woken up enough to
          think about it.
        </p>
        <p className={styles.paragraph}>
          I also notice a seasonal pattern beyond just summer nights. January and February tend to
          be low points for me, classic SAD territory, and I get a real lift from around April
          onwards. Turns out there's something to my feeling that summer needs less sleep too,
          research shows sleep duration does shift slightly with daylight, but it's mostly driven by
          waking up earlier rather than actually needing less sleep, so the feeling of needing less
          can be a bit misleading. That's worth remembering now, while it's still light and I feel
          full of energy, so I don't let a temporary boost quietly build up a sleep debt.
        </p>

        <h2 className={styles.sectionHeading}>The Research</h2>

        <h3 className={styles.subHeading}>Screens and Sleep Hygiene</h3>
        <figure className={styles.figure}>
          <img
            className={styles.figureImage}
            src="https://images.unsplash.com/photo-1676644130626-e4b478eafaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
            alt="A person sitting on a couch using a tablet"
          />
          <figcaption className={styles.figureCaption}>
            Photo by{' '}
            <a href="https://unsplash.com/@nhuenerfuerst" target="_blank" rel="noreferrer">
              Nils Huenerfuerst
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </figcaption>
        </figure>
        <p className={styles.paragraph}>
          Sleep hygiene advice is everywhere, but the evidence behind it is more nuanced than the
          usual "no screens" rule suggests. A 2024 National Sleep Foundation consensus statement
          found panelists did not actually reach consensus on whether screen light itself impairs
          adult sleep. What did show a clear effect was reducing engagement with interactive content
          like video games or social media, which led to earlier bedtimes, longer sleep, and better
          quality, separate from the light question. One study also found reduced melatonin at
          bedtime after screen use without a blue-light filter, alongside a reduction in deep sleep
          during the first part of the night. Real-world data backs this up too: screen use before
          bed is linked to worse outcomes across sleep quality, daytime function, and fatigue.
        </p>

        <h3 className={styles.subHeading}>The Midnight Myth</h3>
        <figure className={styles.figure}>
          <img
            className={styles.figureImage}
            src="https://images.unsplash.com/photo-1679855933599-6f2a9a1a5f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
            alt="A clock with the words college written on it"
          />
          <figcaption className={styles.figureCaption}>
            Photo by{' '}
            <a href="https://unsplash.com/@miguelalcantara" target="_blank" rel="noreferrer">
              Miguel Alcântara
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </figcaption>
        </figure>
        <p className={styles.paragraph}>
          There's a popular idea that an hour of sleep before midnight is worth two after. It's a
          myth, there's no biological "midnight switch." What's actually true is that the first few
          hours after you fall asleep contain the highest proportion of deep sleep, whatever time
          that happens to be. Since I'm reliably woken by the dog, the cat, or the kids by around
          6:30am regardless of what I do, my wake time is basically fixed. That means the only lever
          I actually have is bedtime. Falling asleep earlier doesn't just mean more total sleep, it
          means starting that valuable deep-sleep-heavy window earlier too, so it has more chance of
          completing before something wakes me.
        </p>

        <h3 className={styles.subHeading}>Night Terrors Explained</h3>
        <p className={styles.paragraph}>
          Night terrors and similar confused wakings typically happen during the transition out of
          deep sleep, moving from slow-wave sleep into a lighter stage. Rather than shifting
          smoothly, part of the brain wakes up while another part hasn't caught up, sometimes called
          a confusional arousal. This is also why timing matters: since deep sleep is concentrated
          in the first sleep cycles, these transitions tend to happen in the first third to half of
          the night. In a way, night terrors might be a sign I am getting into deep sleep, just that
          the transition out of it isn't clean.
        </p>

        <h3 className={styles.subHeading}>Deep Sleep, Ageing and Autophagy</h3>
        <p className={styles.paragraph}>
          Deep sleep also matters more the older you get. Growth hormone release, tied to physical
          repair, happens overwhelmingly during slow-wave sleep, and deep sleep is thought to help
          clear beta-amyloid, a protein linked to Alzheimer's. Poor sleep has been associated with
          higher amyloid buildup, one more reason deep sleep deserves more attention than it gets.
        </p>
        <p className={styles.paragraph}>
          This is also the piece that connects back to why I started here. Autophagy, the process
          I'd been trying to trigger through fasting, isn't reserved for fasting windows. It's also
          linked to deep sleep, alongside exercise and calorie restriction. So poor sleep isn't just
          tiring, it may be quietly working against the very repair process I was trying to
          encourage through fasting in the first place.
        </p>

        <h3 className={styles.subHeading}>Eating Before Bed</h3>
        <p className={styles.paragraph}>
          Eating close to bedtime shows up again and again as a factor in poor sleep. Studies
          consistently link eating or drinking within an hour or so of bedtime to more awakenings
          and less efficient sleep, while a gap of around four to six hours between eating and
          bedtime is associated with better sleep duration and quality. High-fat or high-carb meals
          eaten late seem to be worse offenders, extending the time it takes to fall asleep, while
          eating earlier in the evening gives digestion time to settle before the body switches into
          sleep mode.
        </p>

        <h2 className={styles.sectionHeading}>The Plan</h2>
        <figure className={styles.figure}>
          <img
            className={styles.figureImage}
            src="https://images.unsplash.com/photo-1653260449168-436c9629a846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
            alt="A book opened on top of a bed next to a plant"
          />
          <figcaption className={styles.figureCaption}>
            Photo by{' '}
            <a href="https://unsplash.com/@ikigloo" target="_blank" rel="noreferrer">
              IKIGLOO
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </figcaption>
        </figure>
        <p className={styles.paragraph}>For one week, I'm trying:</p>
        <ul className={styles.list}>
          <li>
            Moving my sertraline to the morning, with the dose left next to my water so I don't
            forget
          </li>
          <li>
            Swapping YouTube (screen off) for Insight Timer in the evening, keeping the wind-down
            "me time" but with something calming instead of stimulating
          </li>
          <li>Getting ready for bed earlier so winding down can start around 10pm</li>
          <li>
            A consistent bedtime of around 10:30pm, working back from a fixed 6:30am wake time,
            aiming for 8 hours
          </li>
          <li>
            Wearing my Apple Watch to bed to track sleep stages, particularly deep sleep, and
            charging it earlier in the evening instead of overnight
          </li>
          <li>
            Cutting off eating after 8pm to start with, working towards an earlier cutoff over time,
            since eating close to bedtime is linked to more disrupted sleep
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>Next Steps</h2>
        <p className={styles.paragraph}>
          A few other things I want to look into, once I've got a baseline from this first week:
        </p>
        <ul className={styles.list}>
          <li>
            Whether acid reflux or indigestion could be behind some of my night wakings, and whether
            something like an indigestion remedy is worth trying
          </li>
          <li>
            Whether a warm bath or shower before bed helps me wind down and fall asleep faster
          </li>
          <li>Magnesium, and whether supplementing could help with sleep quality</li>
        </ul>
        <p className={styles.paragraph}>
          I'll dig into the research on these properly before deciding what, if anything, to add to
          the plan.
        </p>

        <h2 className={styles.sectionHeading}>Watch This Space</h2>
        <p className={styles.paragraph}>
          I'll be tracking each night through the week, and I'll be back in a week with an update on
          how it's gone, along with what I'm looking into next.
        </p>

        <figure className={styles.figure}>
          <img
            className={styles.figureImage}
            src="https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
            alt="Woman sitting on white bed while stretching"
          />
          <figcaption className={styles.figureCaption}>
            Photo by{' '}
            <a href="https://unsplash.com/@brucemars" target="_blank" rel="noreferrer">
              bruce mars
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </figcaption>
        </figure>

        <a href="/personal" className={styles.backLink}>
          ← Back to personal
        </a>
      </main>
    </div>
  )
}

export default WellnessJourney
