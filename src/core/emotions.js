const groups = Object.freeze({
    AFRAID: 1,
    ANGRY: 2,
    DISGUSTED: 3,
    HAPPY: 4,
    SAD: 5,
    SURPRISED: 6
});

const colors = {
    [groups.ANGRY]: '#f44336',
    [groups.AFRAID]: '#74ac33',
    [groups.DISGUSTED]: '#a13cb2',
    [groups.HAPPY]: '#f5a620',
    [groups.SAD]: '#2f97ea',
    [groups.SURPRISED]: '#678a9a'
};

const emotions = Object.freeze({
    //angry
    aggressive: groups.ANGRY,
    annoyed: groups.ANGRY,
    critical: groups.ANGRY,
    devastated: groups.ANGRY,
    disrespected: groups.ANGRY,
    enraged: groups.ANGRY,
    frustrated: groups.ANGRY,
    furious: groups.ANGRY,
    hateful: groups.ANGRY,
    hurt: groups.ANGRY,
    infuriated: groups.ANGRY,
    jealous: groups.ANGRY,
    mad: groups.ANGRY,
    resentful: groups.ANGRY,
    suspicious: groups.ANGRY,
    threatened: groups.ANGRY,

    //afraid
    anxious: groups.AFRAID,
    embarrassed: groups.AFRAID,
    frightened: groups.AFRAID,
    inadequate: groups.AFRAID,
    insecure: groups.AFRAID,
    insignificant: groups.AFRAID,
    overwhelmed: groups.AFRAID,
    rejected: groups.AFRAID,
    ridiculed: groups.AFRAID,
    scared: groups.AFRAID,
    submissive: groups.AFRAID,
    terrified: groups.AFRAID,
    worried: groups.AFRAID,
    worthless: groups.AFRAID,

    //disgusted
    avoidant: groups.DISGUSTED,
    awful: groups.DISGUSTED,
    bored: groups.DISGUSTED,
    detested: groups.DISGUSTED,
    disappointed: groups.DISGUSTED,
    disapproving: groups.DISGUSTED,
    hesitant: groups.DISGUSTED,
    humiliated: groups.DISGUSTED,
    judgemental: groups.DISGUSTED,
    loathing: groups.DISGUSTED,
    repugnant: groups.DISGUSTED,
    revolted: groups.DISGUSTED,

    //happy
    adventurous: groups.HAPPY,
    amused: groups.HAPPY,
    confident: groups.HAPPY,
    content: groups.HAPPY,
    ecstatic: groups.HAPPY,
    free: groups.HAPPY,
    fulfilled: groups.HAPPY,
    inquisitive: groups.HAPPY,
    inspired: groups.HAPPY,
    intimate: groups.HAPPY,
    joyful: groups.HAPPY,
    loving: groups.HAPPY,
    open: groups.HAPPY,
    optimistic: groups.HAPPY,
    peaceful: groups.HAPPY,
    playful: groups.HAPPY,
    powerful: groups.HAPPY,
    proud: groups.HAPPY,
    respected: groups.HAPPY,

    //sad
    abandoned: groups.SAD,
    apathetic: groups.SAD,
    ashamed: groups.SAD,
    depressed: groups.SAD,
    despaired: groups.SAD,
    distant: groups.SAD,
    empty: groups.SAD,
    guilty: groups.SAD,
    ignored: groups.SAD,
    indifferent: groups.SAD,
    inferior: groups.SAD,
    isolated: groups.SAD,
    lonely: groups.SAD,
    powerless: groups.SAD,
    remorseful: groups.SAD,
    vulnerable: groups.SAD,
    withdrawn: groups.SAD,

    //surprise
    astonished: groups.SURPRISED,
    amazed: groups.SURPRISED,
    confused: groups.SURPRISED,
    disillusioned: groups.SURPRISED,
    dismayed: groups.SURPRISED,
    eager: groups.SURPRISED,
    excited: groups.SURPRISED,
    shocked: groups.SURPRISED,
    startled: groups.SURPRISED
});

export {emotions, groups, colors};
