export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $liff } = useNuxtApp()
    if (process.client) {
        await $liff.init({ liffId: '2006368617-EXzN7kjR' })
        if ($liff.isLoggedIn()) {
            const profile = useState('userProfile', () => '')
            profile.value = await $liff.getDecodedIDToken()
        }
    }
})