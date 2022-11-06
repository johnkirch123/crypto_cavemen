const stories = [
  {
    title: 'In the Beginning...',
    type: 'book',
    book: 1,
    chapter: null,
  },
  {
    title: 'The Unparalleled discovers trouble in paradise',
    body: [
      `And then The Unparalleled said, “Let there be light!"`,
      `With those words—a kind of cosmic joke—the immortal demigod punctuated his Big Bang moment, and a strange island world came alive with the sounds of its first inhabitants…`,
      `Ooga booga ooga booga!`,
      `Ah, The Zoms. Those hirsute knuckle-draggers wasted no time getting down and more than a little dirty. They had been made in the image of Earth’s cavemen, after all, and they were acting like it. Shaking trees. Pounding sand. Doing their unevolved version of MMA from this—the very moment—they stumbled and sputtered to life on the island.`,
      `He considered his original motivation–his grand vision–for creating this island world…`,
      `The one topped by a towering volcano, carpeted with lush jungle, and plunked down in a corner of the cosmos near Earth, the home of what were now called homo sapiens…`,
      `“It’s about freedom, baby,” said The Unparalleled in his best Earthling voice. (He considered himself a master of impressions, and there was no one around to tell him otherwise.)`,
      `The Unparalleled had wanted to create a community around a simple concept with big implications: permission. To make your own way. And make your own mistakes.`,
      `That’s when he saw a bright, almost violent orange licking the daytime sky. It wasn’t the light of creation any more than it was his new island world’s sun. So what was it?`,
      `The Unparalleled peered through the permutations of infinity at the island’s volcano, so tall that its peak punctured the troposphere like a pen through cotton...`,
      `No eruption. Not even a hit of lava. Calm as the surrounding waters. So if the volcano wasn’t the source, then where was the light coming from?`,
      `The orange glow was not only intensifying; it was giving off an ever-increasing heat. Which sent the all-dude crew of Zoms into an ooga-booga-ing frenzy, their grabass-ery quickly morphing into a prehistoric moshpit.`,
      `No doubt about it, thought The Unparalleled, the monkey men were spooked.`,
      `Then a fragrant, unmistakable odor hit him… one that signaled either a great leap forward for The Zoms, or a catastrophe so total it meant nothing less than the end of the island itself…`,
      `Smoke.`,
    ],
    type: 'chapter',
    book: 1,
    chapter: 1,
  },
  // {
  //   title: 'Tamer confronts a monster',
  //   body: [
  //     `Tamer brushed the sand from his eyes, sat up, and surveyed his new home—his only home, really, aside from wherever he was before he face-planted here—and took in the volcano towering above the lush jungle. Kinda pretty, he thought.`,
  //     `Ooga booga ooga booga!`,
  //     `Startled, Tamer jumped to his feet, flipped around, and found himself face to face with … well… he wasn’t sure what to call it. Covered in hair, including an untamed beard, the thing had muscular arms and legs roped with sinew and veins, and gave off a pungent odor of sweat and coconut. And its eyes—its eyes glowed with what Tamer interpreted as a dangerous mix of confusion and rage.`,
  //     `Tamer didn’t know much, but he knew (or thought he knew) a monster when he spotted one. So he made a snap decision and trucked the big bastard, sending it scudding across the sand, before sprinting into the jungle.`,
  //     `Tamer ripped through vines, scaled fallen palm trees, and leapt over brush. He didn’t stop until he encountered a beach and a seemingly limitless sea.`,
  //     `Huffing and puffing, Tamer bent over, resting his massive hands on his sand-caked knees. The salty sea air stung his nostrils. He stood back up and checked behind him: nothing but jungle. No sign of the monster anywhere.`,
  //     `Tamer had so many questions and so few answers. He needed a safe place. To get his bearings. To figure out where he was. To figure out what he was.`,
  //     `It was then that a giant ball of fire erupted in the jungle, followed by thick black smoke spewing into the air above the treeline. So much for a safe place, he thought, before bolting down the shore. Best to keep on keepin’ on.`,
  //   ],
  //   type: 'chapter',
  //   book: 1,
  //   chapter: 2,
  // },
  // {
  //   title: 'Kog encounters a stranger in need',
  //   body: [
  //     `Kog fell out of the coconut tree and landed with a hideous thud on the jungle floor. His brain buzzing and his eyes doing pinwheels, Kog stood up and slapped his bearded cheeks, hard. Snap out of it, he thought.`,
  //     `Slowly but surely, this new world–the only world he knew–stopped spinning and came into focus…`,
  //     `About 50 yards away, in a sandy clearing, he spotted a fellow caveman staring up at the volcano—the island’s dominant feature—while settling into the lotus position like some prehistoric Buddah. Only the caveman wasn’t meditating; he was suffering. From anxiety-laced bewilderment, judging by the way he’d started looking around.`,
  //     `Poor fella, Kog thought, better go say hello.`,
  //     `Ooga booga ooga booga!`,
  //     `Kog’s greeting only made things worse. The caveman jumped to his feet, wheeled around, and stared at Kog with eyes so wide Kog got temporarily lost in them. (Why was he so spooked? Kog wondered to himself. We’re both cavemen, aren’t we?) Whatever this caveman was thinking, he didn’t share it with Kog. Instead, the caveman took Kog’s momentary hypnosis as an opportunity to knock Kog flat on his furry rump, before darting off into the jungle.`,
  //     `Buzzed from another blow to the head, Kog stumbled to his feet, only to witness another spectacle he couldn’t explain. One that was both awe-inspiring and alarming…`,
  //     `Whoosh! A huge ball of flame and smoke erupted in the jungle. A palm tree’s fronds caught fire, and a pounding sound—menacing and chaotic—roared to life.`,
  //     `Ooga booga ooga booga!`,
  //     `Kog froze in place, startled. For a second, he thought maybe he’d yelled out and didn’t realize it. After all, he was still scrambled from the collision with the caveman, not to mention the fall from the tree. But Kog soon realized he wasn’t the source of the ooga-booga…`,
  //     `There were more cavemen. A lot more. And they were coming right at him.`,
  //   ],
  //   type: 'chapter',
  //   book: 1,
  //   chapter: 3,
  // },
  // {
  //   title: 'Tamer makes a discovery',
  //   body: [
  //     `Tamer ran along the shore, his furry feet slapping the wet sand. He occasionally glanced over his shoulder. The ever-growing inferno blazed in the distance. But what worried Tamer more was that foul-smelling furball with the abnormally long arms and crazy eyes. He was worried the monster might try and track him. But so far, so good-ish.`,
  //     `As he rounded a bend, puzzling over what, if anything, to do about his close encounter with the monster other than keep on keepin’ on, a new wonder interrupted his thoughts, bringing with it a fresh jolt of fear…`,
  //     `Wooden crates. There were hundreds of them spread out along the shore. Stacked on top of one another. Half-buried in the sand. Bobbing in the gentle waves. Some were broken and spilling their contents.`,
  //     `Pushing down his fear, Tamer cautiously approached one of these and extracted an elegant object of mysterious purpose. He weighed it in his hand—light—then held its shiny, circular surface up to his face… and spotted another one of those hirsute heathens!`,
  //     `Head on a swivel, Tamer dropped into a defensive crouch and brandished the object like a weapon. (Would he even fight back? He wasn’t sure.) But there was no sign of this new threat. Where did it go? How did it sneak up on him like that? How many more were…`,
  //     `… Wait a minute…`,
  //     `A terrible realization—one that came from a deep, unnamable part of himself—bubbled up in Tamer. Shaking, he gripped the object with two hands, brought its shiny, circular surface back up to his face, and examined the monster staring back at him…`,
  //     `He blinked—it blinked. He wiggled his nose—it wiggled its nose. He stuck out his tongue—ditto. His hands stopped shaking and dropped limply by his sides, and the mirror fell onto the beach.`,
  //     `Was Tamer really… a… monster?`,
  //   ],
  //   type: 'chapter',
  //   book: 1,
  //   chapter: 4,
  // },
  // {
  //   title: 'Kog harnesses a mysterious power',
  //   body: [
  //     `Kog watched as a dozen cavemen clamored out of the jungle and into the clearing. They were fleeing the fire and going nutsy-crazy. Shaking trees. Punching the sand. Shoving each other. And, of course, ooga-booga-ing away.`,
  //     `The freakout and the fire divided his attention—a scythe through his mind. Kog considered his options. None were good. He’d recovered from the fall and the collision with that scaredy-cat caveman, and his new-found clarity brought a sobering realization: Kog had no idea how to stop the fire or the cavemen from continuing to rage out of control.`,
  //     `An intense helplessness came over Kog. Desperate to do something, he climbed onto a nearby, four-foot-high rock, cleared his throat, and, without thinking, blurted out: “My dudes!”.`,
  //     `Some of the cavemen looked around, confused. Others, still juiced on the chaos, pantomimed choking an enemy. Still others split the difference and scratched themselves like they were digging for buried treasure. But at least they weren’t losing their shit anymore.`,
  //     `Kog aimed a finger at the fire snapping, crackling, and popping through palm trees, coconuts trees, vines, and bushes. “You keep acting like you can’t do anything about what’s going on out there. And guess what? You won’t be able to do anything! It’s called a self-fulfilling prophecy, my dudes.`,
  //     `“But all is not lost. Because just as surely as you can think your way into a self-fulfilling prophecy, you can think your way out of it.” Kog paused for effect. “So how ’bout it, my dudes? How ’bout we put our heads together and come up with a plan?”`,
  //     `By now, most of the cavemen had stopped freaking. Some were even listening. And a very few—a group Kog felt might be different, special even—seemed ready to act.`,
  //     `Encouraged, Kog said, “OK, now we’re getting some—”`,
  //     `A ferocious blast of wind sent Kog and his audience flying in all directions. And then, poof, just like that, the jungle was silent and the air still.`,
  //     `The cavemen lay scattered about in the sand, unmoving, under a thick blanket of all that remained of the once-raging fire...`,
  //     `Smoke.`
  //   ],
  //   type: 'chapter',
  //   book: 1,
  //   chapter: 5,
  // },
  // {
  //   title: 'The Unparalleled confronts an unsettling reality',
  //   body: [
  //     `For the first time in forever (literally), The Unparalleled—that all-seeing, all-knowing, immortal demigod—had no answers to the most burning (literally) questions about the island world he created.`,
  //     `Namely: Who started the fire, who put it out, and why? Or put another way: what started the fire, what put it out, and why?`,
  //     `Yes, The Unparalleled was having a sad. The lord of lords, capable of traveling through time, space, and way too much space junk without moving from his solid gold, bejeweled throne smack dab in the center of infinity itself, was disturbed by this cosmic mystery, and more important, his inability to solve it.`,
  //     `Searching for answers (literally), The Unparalleled returned his all-powerful gaze to the island and watched Tamer watch the thinning stream of smoke hovering above the jungle canopy. The fire was out, and Tamer no doubt grasped the implications better than the others.`,
  //     `This one was smart, thought The Unparalleled.`,
  //     `That Tamer didn’t recognize, or maybe didn’t want to recognize, that he was, in fact, a caveman, was proof of it. Ironic proof, but proof nonetheless. For Tamer, discovering he was a caveman meant he was a member of a, shall we say, unevolved species. And that is not how Tamer saw himself. The caveman in the mirror had shattered his self-conception, leaving Tamer to root through the cargo (another mystery—where did that come from?) in a quest for more clues. To his identity. To his purpose. To, well, everything.`,
  //     `And what about Kog? His facility with language was uncanny. (“Self-fulfilling prophecy”? Where did that furball get that from?) Maybe the unfortunate number of head injuries had activated something in him? Who knows, thought The Unparalleled. Certainly not me.`,
  //     `That great blast of wind (or whatever it was) had snuffed out the fire and sent Kog and his fellow cavemen flying in all directions, but, within minutes, those rawhide rugged dude-bros were back on their feet and awaiting instructions from their newly minted leader.`,
  //     `So Kog climbed back onto the rock and delivered another speech. Invigorated with a sense of purpose (and maybe buzzed from the blast), he floated a theory that Tamer, the missing caveman, was responsible for the fire. His disappearance coincided with the conflagration, after all. Surely that wasn’t a coincidence? Well, there was only one way to find out: send a search party to locate Tamer and bring him to Kog for questioning.`,
  //     `That’s right, thought The Unparalleled. Speak with authority, rule with certainty. Kog was a natural.`,
  //     `The Unparalleled had completed his divine surveillance. He closed his all-seeing eyes and settled back in his excessively ornate throne. The great irony was that the mystery of Tamer’s big ol’ brain, Kog’s linguistic prowess, and, most important, the fire was that, however incomprehensible they were to The Unparalleled, they were his doing. None of it would exist without him. And no one could take that away.`,
  //     `Yet The Unparalleled wasn’t built for rationalization, and trying to fool himself into believing everything that had unfolded on the island on this, its first day of existence, was part of his grand design left him cold…`,
  //     `He opened his eyes and sighed into infinity. It had been a long day. And he could still smell the smoke.`
  //   ],
  //   type: 'chapter',
  //   book: 1,
  //   chapter: 6,
  // },
];

const storyBox = document.querySelector('.story__body');
const storyTOC = document.querySelector('.story__toc--box');

const displayTOC = () => {
  let text;
  stories.forEach((story) => {
    console.log(story);
    switch (story.type) {
      case 'book':
        text = document.createElement('h6');
        text.innerText = `Day ${story.book} - ${story.title}`;
        text.onclick = () => {
          storyBox.innerHTML = '';
          stories.forEach((st) => {
            if (st.book === story.book) displayStory(st);
          });
        };
        text.classList.add('story__toc--book', 'story__link');
        storyTOC.appendChild(text);
        break;
      case 'chapter':
        text = document.createElement('p');
        text.innerText = `${story.title}`;
        text.onclick = () => {
          storyBox.innerHTML = '';
          displayStory(story);
        };
        text.classList.add('story__toc--chapter', 'story__link');
        storyTOC.appendChild(text);
        break;
      default:
        console.log('Not a case');
    }
  });
};

const displayStory = (story) => {
  let storyTitle = document.createElement('h1');
  let storyWriting;
  storyTitle.innerText = story?.title;
  storyBox.appendChild(storyTitle);
  story?.body?.forEach((paragraph) => {
    storyWriting = document.createElement('p');
    storyWriting.innerText = paragraph;
    storyBox.appendChild(storyWriting);
    storyBox.appendChild(document.createElement('br'));
  });
};

// displayTOC();
// displayStory(stories[stories.length - 1]);
