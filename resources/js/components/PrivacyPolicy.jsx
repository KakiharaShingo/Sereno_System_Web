import React, { useEffect } from 'react';
import { ArrowLeft, Layers, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-emerald-50/50 font-sans text-emerald-950 selection:bg-emerald-200 selection:text-emerald-950 relative overflow-x-hidden">
            {/* --- Navigation --- */}
            <nav className="fixed top-0 w-full z-50 bg-emerald-50/90 backdrop-blur-xl shadow-lg shadow-emerald-100/50 py-3">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative w-11 h-11 bg-emerald-900 rounded-xl flex items-center justify-center shadow-2xl shadow-emerald-400/20 transform rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
                            <Layers size={28} className="text-emerald-300 absolute -top-1 -left-1 opacity-80" />
                            <Printer size={28} className="text-white relative z-10" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-2xl font-extrabold tracking-tighter text-emerald-950 leading-none">
                                3DMOTO<span className="text-emerald-500">CRAFT</span>
                            </span>
                            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-emerald-700/80 uppercase mt-1 pl-0.5">
                                Sereno System
                            </span>
                        </div>
                    </Link>

                    <Link to="/" className="px-6 py-2.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2">
                        <ArrowLeft size={16} />
                        ホームに戻る
                    </Link>
                </div>
            </nav>

            {/* --- Content --- */}
            <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-12 text-center">プライバシーポリシー</h1>

                <div className="bg-white/80 p-8 md:p-12 rounded-3xl shadow-xl shadow-emerald-100/50 border border-emerald-100 backdrop-blur-sm space-y-10">
                    <p className="text-emerald-900/60 text-right text-sm">最終更新日：2024年6月26日</p>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">1. 個人情報の取得について</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">当社（Sereno System）は、以下の場合に個人情報を取得いたします：</p>
                        <ul className="list-disc list-inside text-emerald-900/80 space-y-2 ml-4">
                            <li>お問い合わせフォームからのご連絡時</li>
                            <li>サービスのご利用時</li>
                            <li>その他、個人情報の提供をいただく場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">2. 取得する個人情報の項目</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">当社が取得する個人情報は以下の通りです：</p>
                        <ul className="list-disc list-inside text-emerald-900/80 space-y-2 ml-4">
                            <li>氏名</li>
                            <li>メールアドレス</li>
                            <li>電話番号（任意）</li>
                            <li>お問い合わせ内容</li>
                            <li>その他、お客様からご提供いただく情報</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">3. 個人情報の利用目的</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">取得した個人情報は、以下の目的で利用いたします：</p>
                        <ul className="list-disc list-inside text-emerald-900/80 space-y-2 ml-4">
                            <li>お問い合わせへの回答</li>
                            <li>サービスの提供</li>
                            <li>サービス向上のための分析</li>
                            <li>重要なお知らせの連絡</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">4. 個人情報の第三者提供</h2>
                        <p className="text-emerald-900/80 leading-relaxed">当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">5. 個人情報の管理</h2>
                        <p className="text-emerald-900/80 leading-relaxed">当社は、個人情報の正確性を保ち、これを安全に管理いたします。個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、必要かつ適切な安全管理措置を講じます。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">6. 個人情報の開示・訂正・削除</h2>
                        <p className="text-emerald-900/80 leading-relaxed">ご本人から個人情報の開示・訂正・削除等の申し出があった場合には、合理的な期間内に対応いたします。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">7. Cookieについて</h2>
                        <p className="text-emerald-900/80 leading-relaxed">当サイトでは、サービス向上のためCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">8. プライバシーポリシーの変更</h2>
                        <p className="text-emerald-900/80 leading-relaxed">当社は、法令の改正等に伴い、本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、当サイトに掲載したときから効力を生じるものとします。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">9. お問い合わせ窓口</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">個人情報の取扱いに関するお問い合わせは、以下までご連絡ください：</p>
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <p className="font-bold text-emerald-900 mb-2">Sereno System</p>
                            <p className="text-emerald-800 text-sm mb-1">〒594-1136　大阪府和泉市仏並町170-1</p>
                            <p className="text-emerald-800 text-sm mb-1">TEL: 090-3288-5689</p>
                            <p className="text-emerald-800 text-sm">Email: sk.shingo.10@gmail.com</p>
                        </div>
                    </section>
                </div>
            </div>

            {/* --- Footer --- */}
            <footer className="bg-emerald-950 text-emerald-300/80 py-12 border-t border-emerald-900">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xs">&copy; 2024 Sereno System. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
