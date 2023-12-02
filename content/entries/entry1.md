---
title: From Twitter to Self-Hosted
slug: twitter-to-self-hosted
createdAt: 2023-11-16
type: story
author: dominik
---

I haven't been very active on my personal website lately.

Even though I have a few writing ideas saved in my folder, I often feel hesitant to publish them, because they seem too unfinished and rough.

While posting on Twitter may be a popular choice for many people, the presence of ads, constant distractions, social pressure, and reliance on the decisions of a wealthy individual do not create the environment I desire.

![my image](/img/entries/entry1.1.png)

## Vision

So, how about creating a self-hosted playground, adding some Twitter-like posts, and making it my new personal website?

Once I let that thought cross my mind, I couldn't resist evolving my website to a personal microblog.

## Publishing Flow

As implied in the introduction, the success of the project hinges on how swiftly and conveniently posts can be published.

Using Notion as a CMS was therefore a no-brainer, since I already use it daily.

> Building a custom UI to manage content wasn't feasible (at least for the first release cycle) as this introduces other issues, such as authentication and user management.

## Inspirations

 order to get an idea of the potential outcome, I began to conduct research, where I discovered several clutter-reducing tools like Minus, Kizie, Typefully, and Polywork, besides all-time favorites like Read.cv and Rep.ly.

 Based on this, I determined some basic requirements for my own solution.

 ## Anatomy of a Post

 With the demands in mind, I defined and designed the building blocks of a post, as these are the center of attention on any page.

As a result, timestamp, post category, publishing status (for internal purposes), and a content object (consisting of text, image, and link) emerged as crucial information pieces.

Additionally, I included an option to pin posts at the top of the page.

Posts can also be created by multiple authors, so it is necessary to display the author's name and image.

![my image](/img/entries/entry1.2.jpg)

![my image](/img/entries/entry1.3.jpg)

## Layout & Navigation

After defining the post itself, I focused on its surrounding in order to move from the details to the bigger picture.

While it was clear to present posts in a chronologically sorted list, I also had to think about the navigation and its content.

Therefore I decided to go for a globally accessible and sticky navigation bar at the bottom of every page, allowing the user to switch between work- and life-related posts.

![my image](/img/entries/entry1.4.jpg)

## Next Steps

With the finalization of the design, I'm going to start with the Next.js frontend and the connection of the Notion database, as mentioned above.

In addition, I plan to make posts importable by providing a RSS feed.

Besides that, I’m also considering new content types such as videos or milestones, but that's something for the future.

## Learnings

I have mostly gained frontend experience with Vue and Angular, so I expect the biggest challenges of exploring a completely new JavaScript framework are yet to come.

However, I am excited for this opportunity to learn and grow.