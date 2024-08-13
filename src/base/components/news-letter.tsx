import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Newsletter: FC<{}> = () => {
  const {t} = useTranslation()
  return (
    <section className="newsletter-area section-padding-100-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="newsletter-text mb-100">
              <h2>{t('subscribe_for_a')} <span>25% {t('discount')}</span></h2>
              <p>{t('content_discount')}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="newsletter-form mb-100">
              <form action="#" method="post">
                <input type="email" name="email" className="nl-email" placeholder={`${t('your_email')}`} />
                <input type="submit" value={`${t('subscribe')}`} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Newsletter;