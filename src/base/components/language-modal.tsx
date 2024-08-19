import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageProps {
    show: boolean,
    handleClose: () => void,
    currentLanguage: string,
    changeLanguage: (lang: string) => void
}

const LanguageModal: FC<LanguageProps> = ({ show, handleClose, currentLanguage, changeLanguage }) => {
    const {t} = useTranslation()
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'vi', name: 'Tiếng Việt' },
        { code: 'ko', name: 'Hàn Quốc' },
        { code: 'cn', name: 'Tàu khựa' },
        // Thêm các ngôn ngữ khác nếu cần
    ];

    useEffect(() => {
        if (show) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        // Cleanup when component unmounts
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [show]);

    return (
        <div className={`modal custom-modal ${show ? 'd-block' : 'd-none'}`} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{t('language')}</h5>
                        <button type="button" className="close" onClick={handleClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">
                            {languages.map((lang) => (
                                <li
                                    key={lang.code}
                                    className={`list-group-item ${currentLanguage === lang.code ? 'active' : ''
                                        }`}
                                    onClick={() => changeLanguage(lang.code)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {lang.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning text-white" onClick={handleClose}>
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;