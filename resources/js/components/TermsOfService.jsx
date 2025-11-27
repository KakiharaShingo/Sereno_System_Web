import React, { useEffect } from 'react';
import { ArrowLeft, Layers, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
                <h1 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-12 text-center">利用規約</h1>

                <div className="bg-white/80 p-8 md:p-12 rounded-3xl shadow-xl shadow-emerald-100/50 border border-emerald-100 backdrop-blur-sm space-y-10">
                    <p className="text-emerald-900/60 text-right text-sm">最終更新日：2024年6月26日</p>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第1条（適用）</h2>
                        <p className="text-emerald-900/80 leading-relaxed">本利用規約（以下「本規約」）は、Sereno System（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。お客様には、本規約に従って本サービスをご利用いただきます。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第2条（利用登録）</h2>
                        <p className="text-emerald-900/80 leading-relaxed">本サービスの利用を希望する方は、当社の定める方法によって利用申込を行い、当社がこれを承認することによって、本サービスの利用契約が成立するものとします。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第3条（禁止事項）</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">お客様は、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
                        <ul className="list-disc list-inside text-emerald-900/80 space-y-2 ml-4">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                            <li>当社のサービスの運営を妨害するおそれのある行為</li>
                            <li>他のお客様に関する個人情報等を収集または蓄積する行為</li>
                            <li>他のお客様に成りすます行為</li>
                            <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                            <li>その他、当社が不適切と判断する行為</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第4条（本サービスの提供の停止等）</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">当社は、以下のいずれかの事由があると判断した場合、お客様に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：</p>
                        <ul className="list-disc list-inside text-emerald-900/80 space-y-2 ml-4">
                            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                            <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第5条（利用制限および登録抹消）</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">当社は、お客様が以下のいずれかに該当する場合には、事前の通知なく、お客様に対して本サービスの全部もしくは一部の利用を制限し、またはお客様としての登録を抹消することができるものとします：</p>
                        <ul className="list-disc list-inside text-emerald-900/80 space-y-2 ml-4">
                            <li>本規約のいずれかの条項に違反した場合</li>
                            <li>登録事項に虚偽の事実があることが判明した場合</li>
                            <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第6条（免責事項）</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">当社は、本サービスに関して、以下の事項について一切の責任を負いません：</p>
                        <ul className="list-disc list-inside text-emerald-900/80 space-y-2 ml-4">
                            <li>本サービスの内容、品質、正確性、有用性、適法性について</li>
                            <li>本サービスの利用により生じた損害について</li>
                            <li>本サービスの提供の中断、停止により生じた損害について</li>
                            <li>第三者の行為により生じた損害について</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第7条（サービス内容の変更等）</h2>
                        <p className="text-emerald-900/80 leading-relaxed">当社は、お客様に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってお客様に生じた損害について一切の責任を負いません。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第8条（利用規約の変更）</h2>
                        <p className="text-emerald-900/80 leading-relaxed">当社は、お客様に通知することなく、いつでも本規約を変更することができるものとします。変更後の利用規約は、当社ウェブサイトに掲載したときから効力を生じるものとします。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第9条（個人情報の取扱い）</h2>
                        <p className="text-emerald-900/80 leading-relaxed">当社は、本サービスの利用によって取得する個人情報については、当社の「プライバシーポリシー」に従い適切に取り扱うものとします。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第10条（準拠法・裁判管轄）</h2>
                        <p className="text-emerald-900/80 leading-relaxed">本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">第11条（お問い合わせ）</h2>
                        <p className="text-emerald-900/80 leading-relaxed mb-4">本規約に関するお問い合わせは、以下までご連絡ください：</p>
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
