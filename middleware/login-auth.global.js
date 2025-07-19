export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $liff } = useNuxtApp()
    if (process.client) {
        await $liff.init({ liffId: '請填上liffId' })
        if ($liff.isLoggedIn()) {
            const profile = useState('userProfile', () => '')
            profile.value = await $liff.getDecodedIDToken()
        }
    }
})