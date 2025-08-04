<script setup>
    import gradientBg from '@/assets/images/gradient-bg.png'
    import lineLogo from '@/assets/images/line-logo.svg'
    const { $swal, $liff } = useNuxtApp()
    const router = useRouter()
    const onLineSignupClick = async () => {
        if (!process.client) return;
        await $swal.fire({
			title: "隱私權政策與服務條款聲明",
			icon: "info",
            width: "90%",
            html: `<div style="text-align: left; max-height: 60vh; overflow-y: auto; padding-right: 8px;">
                <h3 class="text-3xl font-bold text-[#3FC3EE] mb-3">隱私權政策</h3>
                <h4 class="text-xl font-bold">一、適用範圍</h4>
                <p>本政策適用於您在使用本網站所提供的各項服務時，所涉及的個人資料收集、處理與利用。</p>
                <br/>
                <h4 class="text-xl font-bold">二、個人資料蒐集目的與類型</h4>
                <p>本網站將蒐集下列資訊以提供會員服務、訂單處理、客服聯繫與行銷通知：</p>
                <ul>
                <li>1. 姓名、聯絡電話、電子郵件等聯絡資料</li>
                <li>2. 登入資訊、IP 位址、瀏覽紀錄、裝置資訊等使用行為紀錄</li>
                </ul>
                <br/>
                <h4 class="text-xl font-bold">三、資料使用方式</h4>
                <p>蒐集之個人資料僅用於提供服務與行銷推播，並依法律規定處理與保護。</p>
                <br/>
                <h4 class="text-xl font-bold">四、資料保存與安全</h4>
                <ul>
                <li>1. 您的個人資料將依據業務需求與法令規定保存，期間屆滿後將刪除或匿名化處理。</li>
                <li>2. 本網站採取合適的資安措施，以防止個資被未授權存取、洩漏或篡改。</li>
                </ul>
                <br/>
                <h4 class="text-xl font-bold">五、個人資料權利</h4>
                <p>依據《個人資料保護法》，您對所提供的個人資料擁有以下權利：</p>
                <ul>
                <li>1. 查詢或請求閱覽。</li>
                <li>2. 請求製給複製本。</li>
                <li>3. 請求補充或更正。</li>
                <li>4. 請求停止蒐集、處理或利用。</li>
                <li>5. 請求刪除。</li>
                </ul>
                <br/>
                <h4 class="text-xl font-bold">六、Cookie 技術使用</h4>
                <p>為提升使用體驗，網站可能使用 Cookie 技術，可透過瀏覽器設定限制。</p>
                <br/>
                <h4 class="text-xl font-bold">七、政策修訂</h4>
                <p>本政策得隨時修改，變更內容將公告於本網站，不另行個別通知，請定期查閱。</p>
                <hr class="text-gray-300 border-2 my-4">
                <h3 class="text-3xl font-bold text-[#3FC3EE] mb-3">服務條款</h3>
                <h4 class="text-xl font-bold">一、接受條款</h4>
                <p>歡迎您使用本網站（以下簡稱「本網站」）所提供的服務。當您註冊為會員、或使用本網站任何服務，即表示您已閱讀、了解並同意遵守本服務條款。若您不同意，請勿使用本網站服務。</p>
                <br/>
                <h4 class="text-xl font-bold">二、會員帳號與密碼</h4>
                <p>使用本網站前，您須提供正確個人資訊以完成註冊，若因帳號使用不當導致損害，概由會員自行負責。</p>
                <br/>
                <h4 class="text-xl font-bold">三、使用規範</h4>
                <p>1. 您不得利用本網站從事任何非法、侵權或違反公共秩序善良風俗之行為。</p>
                <p>2. 本網站有權對違反條款之帳號採取限制、終止服務等處置，恕不另行通知。</p>
                <br/>
                <h4 class="text-xl font-bold">四、服務內容變更</h4>
                <p>本網站保留隨時修改、暫停或終止全部或部分服務內容之權利，並不負事先通知之義務。</p>
                <br/>
                <h4 class="text-xl font-bold">五、免責聲明</h4>
                <ul>
                <li>1. 對於因系統維護、天災、駭客攻擊等不可抗力因素所致的服務中斷或資料遺失，本網站不負任何賠償責任。</li>
                <li>2. 本網站對於使用者上傳或張貼的內容，無須負事先審查義務，若發現違法情事將依法處理。</li>
                </ul>
                <br/>
                <h4 class="text-xl font-bold">六、智慧財產權</h4>
                <p>本網站所有內容（含文字、圖像、設計、程式碼等）均為本網站或其合法權利人所有，未經授權不得任意使用、重製或散布。</p>
                <br/>
                <h4 class="text-xl font-bold">七、準據法與管轄權</h4>
                <p>本服務條款之解釋與適用，以中華民國法律為準據法，並以本網站營運所在地之法院為第一審管轄法院。</p>
            </div>`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `同意`,
            cancelButtonText: `不同意`
		})
        .then( async(result) => {
            if (result.isConfirmed) {
                try {
                    await $liff.init({ liffId: "請填上liffId" })
                    if (!$liff.isLoggedIn()) {
                        $liff.login()
                        return
                    }
                    await router.push('/member')
                } catch (error) {
                    console.error('執行錯誤：', error)
                }
            }
        })
    }
    const loginWithLiff = async() => {
        if (!$liff.isLoggedIn()) {
            $liff.login()
            return
        }
        await router.push('/member')
    }
    const policySwal = async() => {
        await $swal.fire({
            title: "隱私權政策聲明",
            icon: "info",
            width: "70%",
            html: `<div class="text-left">
                <h4 class="text-xl font-bold">一、適用範圍</h4>
                <p>本政策適用於您在使用本網站所提供的各項服務時，所涉及的個人資料收集、處理與利用。</p>
                <br/>
                <h4 class="text-xl font-bold">二、個人資料蒐集目的與類型</h4>
                <p>本網站將蒐集下列資訊以提供會員服務、訂單處理、客服聯繫與行銷通知：</p>
                <ul>
                <li>1. 姓名、聯絡電話、電子郵件等聯絡資料</li>
                <li>2. 登入資訊、IP 位址、瀏覽紀錄、裝置資訊等使用行為紀錄</li>
                </ul>
                <br/>
                <h4 class="text-xl font-bold">三、資料使用方式</h4>
                <p>蒐集之個人資料僅用於提供服務與行銷推播，並依法律規定處理與保護。</p>
                <br/>
                <h4 class="text-xl font-bold">四、資料保存與安全</h4>
                <ul>
                <li>1. 您的個人資料將依據業務需求與法令規定保存，期間屆滿後將刪除或匿名化處理。</li>
                <li>2. 本網站採取合適的資安措施，以防止個資被未授權存取、洩漏或篡改。</li>
                </ul>
                <br/>
                <h4 class="text-xl font-bold">五、個人資料權利</h4>
                <p>依據《個人資料保護法》，您對所提供的個人資料擁有以下權利：</p>
                <ul>
                <li>1. 查詢或請求閱覽。</li>
                <li>2. 請求製給複製本。</li>
                <li>3. 請求補充或更正。</li>
                <li>4. 請求停止蒐集、處理或利用。</li>
                <li>5. 請求刪除。</li>
                </ul>
                <br/>
                <h4 class="text-xl font-bold">六、Cookie 技術使用</h4>
                <p>為提升使用體驗，網站可能使用 Cookie 技術，可透過瀏覽器設定限制。</p>
                <br/>
                <h4 class="text-xl font-bold">七、政策修訂</h4>
                <p>本政策得隨時修改，變更內容將公告於本網站，不另行個別通知，請定期查閱。</p>
                </div>`,
            showCloseButton: true,
            confirmButtonText: `了解`,
        })
    }
    const termsSwal = async() => {
        await $swal.fire({
            title: "服務條款聲明",
            icon: "info",
            width: "70%",
            html: `
                <div class="text-left">
                <h4 class="text-xl font-bold">一、接受條款</h4>
                <p>歡迎您使用本網站（以下簡稱「本網站」）所提供的服務。當您註冊為會員、或使用本網站任何服務，即表示您已閱讀、了解並同意遵守本服務條款。若您不同意，請勿使用本網站服務。</p>
                <br/>
                <h4 class="text-xl font-bold">二、會員帳號與密碼</h4>
                <p>使用本網站前，您須提供正確個人資訊以完成註冊，若因帳號使用不當導致損害，概由會員自行負責。</p>
                <br/>
                <h4 class="text-xl font-bold">三、使用規範</h4>
                <p>1. 您不得利用本網站從事任何非法、侵權或違反公共秩序善良風俗之行為。</p>
                <p>2. 本網站有權對違反條款之帳號採取限制、終止服務等處置，恕不另行通知。</p>
                <br/>
                <h4 class="text-xl font-bold">四、服務內容變更</h4>
                <p>本網站保留隨時修改、暫停或終止全部或部分服務內容之權利，並不負事先通知之義務。</p>
                <br/>
                <h4 class="text-xl font-bold">五、免責聲明</h4>
                <ul>
                <li>1. 對於因系統維護、天災、駭客攻擊等不可抗力因素所致的服務中斷或資料遺失，本網站不負任何賠償責任。</li>
                <li>2. 本網站對於使用者上傳或張貼的內容，無須負事先審查義務，若發現違法情事將依法處理。</li>
                </ul>
                <br/>
                <h4 class="text-xl font-bold">六、智慧財產權</h4>
                <p>本網站所有內容（含文字、圖像、設計、程式碼等）均為本網站或其合法權利人所有，未經授權不得任意使用、重製或散布。</p>
                <br/>
                <h4 class="text-xl font-bold">七、準據法與管轄權</h4>
                <p>本服務條款之解釋與適用，以中華民國法律為準據法，並以本網站營運所在地之法院為第一審管轄法院。</p>
                </div>`,
            showCloseButton: true,
            confirmButtonText: `了解`,
        })
    }
</script>
<template>
    <PublicHeader />
    <main class="min-h-screen flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 bg-gradient-to-r from-[#6b4d6b] to-[#2a3e68] p-8 flex justify-center">
            <div class="max-w-2xl mt-8">
                <div class="rounded-md overflow-hidden">
                    <img
                    :src="gradientBg"
                    alt="充滿童趣風格的海底插圖，描繪章魚、鯊魚、熱帶魚與海星在深海中悠游。"
                    class="w-lg h-auto"
                    />
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 bg-white p-8 flex justify-center font-normal">
            <div class="max-w-md w-full sm:mt-30 mt-10">
                <h3 class="text-3xl font-extrabold text-[#525252] text-center mb-3">立即註冊</h3>
                <p class="text-center mb-4 text-[#525252] font-medium">歡迎！透過 <span class=" text-[#00c300]">LINE</span> 註冊，開始使用服務吧。</p>
                <button @click="onLineSignupClick()" class="lineLogo h-12 w-full bg-[#00c300] cursor-pointer font-bold text-white py-3 px-4 rounded-md flex items-center justify-center mb-4">
                    <img
                    alt="LINE註冊登入圖示"
                    :src="lineLogo"
                    width=24
                    height=24
                    class="mr-2"
                    />
                    LINE 註冊
                </button>
                <div class="bg-[#e7eaef] h-12 p-4 rounded-md text-center mb-2 flex items-center justify-center text-center">
                    <span class="text-[#525252] font-medium">已有帳號了？</span>
                    <a href="#" @click.prevent="loginWithLiff" class="text-[#2a68c8] ml-2 hover:underline font-bold">
                        在此登入
                    </a>
                </div>
                <div class="text-start text-[#aeada9] font-medium">
                    <a href="#" @click.prevent="policySwal" class="hover:underline">
                    隱私權政策
                    </a>
                    <span class="mx-1">|</span>
                    <a href="#" @click.prevent="termsSwal" class="hover:underline">
                    服務條款聲明
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>