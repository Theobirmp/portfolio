export const dropIn={
    initial:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            duration:1,
            when:'beforeChildren',
            staggerChildren:1.2,
        }
    }
}
export const dropInInner={
    initial:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            duration:1,
            when:'beforeChildren',
            staggerChildren:.5,
        }
    }
}