export const FadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'tween',
                duration: 1,
                delay
            }
        }
    }
}
export const Fadebot = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'tween',
                duration: 1,
                delay
            }
        }
    }
}
export const FadeLeft = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'tween',
                duration: 1,
                delay
            }
        }
    }
}
export const FadeRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'tween',
                duration: 1,
                delay
            }
        }
    }
}