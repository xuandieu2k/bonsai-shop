import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CheckoutContent: React.FC = () => {

  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'usa',
    address: '',
    city: '',
    zipCode: '',
    phoneNumber: '',
    comment: '',
    createAccount: false,
    shipToDifferentAddress: false,
    paymentMethod: 'cod', // default payment method
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        [id]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handlePaymentMethodChange = (method: string) => {
    setFormData(prevData => ({
      ...prevData,
      paymentMethod: method,
    }));
  };

  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">
              <div className="cart-title">
                <h2>{t('checkout')}</h2>
              </div>

              <form action="#" method="post">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={formData.firstName}
                      placeholder={`${t('first_name')}`}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={formData.lastName}
                      placeholder={`${t('last_name')}`}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      value={formData.company}
                      placeholder={`${t('company_name')}`}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <select
                      className="w-100"
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ger">Germany</option>
                      <option value="fra">France</option>
                      <option value="ind">India</option>
                      <option value="aus">Australia</option>
                      <option value="bra">Brazil</option>
                      <option value="cana">Canada</option>
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="address"
                      value={formData.address}
                      placeholder={t('address')}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      value={formData.city}
                      placeholder={`${t('city')}`}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      value={formData.zipCode}
                      placeholder={`${t('zip_code')}`}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      min="0"
                      placeholder={`${t('phone_number')}`}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name="comment"
                      className="form-control w-100"
                      id="comment"
                      cols={30}
                      rows={10}
                      placeholder={`${t('leave_a_comment_about_your_order')}`}
                      value={formData.comment}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <div className="custom-control custom-checkbox d-block mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="createAccount"
                        checked={formData.createAccount}
                        onChange={handleChange}
                      />
                      <label className="custom-control-label" htmlFor="createAccount">
                        {t('create_an_account')}
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox d-block">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="shipToDifferentAddress"
                        checked={formData.shipToDifferentAddress}
                        onChange={handleChange}
                      />
                      <label className="custom-control-label" htmlFor="shipToDifferentAddress">
                        {t('ship_to_a_different_address')}
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h5>{t('total_cart')}</h5>
              <ul className="summary-table">
                <li><span>{t('sub_total')} :</span> <span>$140.00</span></li>
                <li><span>{t('delivery')} :</span> <span>Free</span></li>
                <li><span>{t('total')} :</span> <span>$140.00</span></li>
              </ul>

              <div className="payment-method">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => handlePaymentMethodChange('cod')}
                  />
                  <label className="custom-control-label" htmlFor="cod">
                    {t('cash_on_deliver')}
                  </label>
                </div>
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={() => handlePaymentMethodChange('paypal')}
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    Paypal <img className="ml-15" src="../../../static/img/core-img/paypal.png" alt="" />
                  </label>
                </div>
              </div>

              <div className="cart-btn mt-100">
                <a href="#" className="btn amado-btn w-100">{t('checkout')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;