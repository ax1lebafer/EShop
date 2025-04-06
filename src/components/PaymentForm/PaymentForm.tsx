import { FC, useState } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { initialValues } from './constants.ts';
import { IPaymentFormFormValues, IPaymentFormProps } from './types.ts';
import { Modal } from '../ui/Modal/Modal.tsx';
import styles from './PaymentForm.module.scss';

export const PaymentForm: FC<IPaymentFormProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState<number>(1);

  const shippingValidationSchema = Yup.object({
    firstName: Yup.string().required(t('enterYourName')),
    lastName: Yup.string().required(t('enterYourLastName')),
    phone: Yup.string()
      .required(t('enterYourPhone'))
      .matches(/^\+?\d{10,15}$/, t('invalidPhoneFormat')),
    shippingMethod: Yup.string()
      .oneOf(['delivery', 'pickup'])
      .required(t('selectShippingMethod')),
    address: Yup.string().when('shippingMethod', (shippingMethod, schema) => {
      const method = Array.isArray(shippingMethod)
        ? shippingMethod[0]
        : shippingMethod;
      return method === 'delivery'
        ? schema.required(t('enterYourShippingAddress'))
        : schema;
    }),
  });

  const cardValidationSchema = Yup.object({
    cardHolder: Yup.string().required(t('enterTheCardholdersName')),
    cardNumber: Yup.string()
      .required(t('enterCardNumber'))
      .matches(/^\d{16}$/, t('cardNumberMustContain16Digits')),
    expiry: Yup.string()
      .required(t('enterTheCardExpirationDate'))
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, t('invalidFormat(MM/YY)')),
    cvv: Yup.string()
      .required(t('enterCVV'))
      .matches(/^\d{3,4}$/, t('cvvInvalid')),
  });

  const handleSubmit = (values: IPaymentFormFormValues) => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      console.log('Информация о доставке:', {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        shippingMethod: values.shippingMethod,
        address:
          values.shippingMethod === 'delivery' ? values.address : 'Самовывоз',
      });
      console.log('Данные карты:', {
        cardHolder: values.cardHolder,
        cardNumber: values.cardNumber,
        expiry: values.expiry,
        cvv: values.cvv,
      });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={initialValues}
        validationSchema={
          currentStep === 1 ? shippingValidationSchema : cardValidationSchema
        }
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className={styles.paymentForm}>
            {currentStep === 1 && (
              <div className={styles.step}>
                <h2>{t('placingAnOrder')}</h2>
                <div className={styles.field}>
                  <label htmlFor="firstName">{t('name')}</label>
                  <Field id="firstName" name="firstName" type="text" />
                  <ErrorMessage
                    name="firstName"
                    component="span"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName">{t('lastName')}</label>
                  <Field id="lastName" name="lastName" type="text" />
                  <ErrorMessage
                    name="lastName"
                    component="span"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">{t('phone')}</label>
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7XXXXXXXXXX"
                  />
                  <ErrorMessage
                    name="phone"
                    component="span"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label>{t('shippingMethod')}</label>
                  <div role="group" className={styles.radioGroup}>
                    <label>
                      <Field
                        type="radio"
                        name="shippingMethod"
                        value="delivery"
                      />
                      {t('delivery')}
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="shippingMethod"
                        value="pickup"
                      />
                      {t('pickUp')}
                    </label>
                  </div>
                  <ErrorMessage
                    name="shippingMethod"
                    component="span"
                    className={styles.error}
                  />
                </div>
                {values.shippingMethod === 'delivery' && (
                  <div className={styles.field}>
                    <label htmlFor="address">{t('shippingAddress')}</label>
                    <Field id="address" name="address" type="text" />
                    <ErrorMessage
                      name="address"
                      component="span"
                      className={styles.error}
                    />
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className={styles.step}>
                <h2>{t('paymentByCard')}</h2>
                <div className={styles.field}>
                  <label htmlFor="cardHolder">{t('cardHolder')}</label>
                  <Field id="cardHolder" name="cardHolder" type="text" />
                  <ErrorMessage
                    name="cardHolder"
                    component="span"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cardNumber">{t('cardNumber')}</label>
                  <Field
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    placeholder="XXXXXXXXXXXXXXXX"
                  />
                  <ErrorMessage
                    name="cardNumber"
                    component="span"
                    className={styles.error}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <div className={styles.field}>
                    <label htmlFor="expiry">{t('validityPeriodMMYY')}</label>
                    <Field
                      id="expiry"
                      name="expiry"
                      type="text"
                      placeholder="MM/YY"
                    />
                    <ErrorMessage
                      name="expiry"
                      component="span"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="cvv">CVV</label>
                    <Field id="cvv" name="cvv" type="password" />
                    <ErrorMessage
                      name="cvv"
                      component="span"
                      className={styles.error}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className={styles.buttons}>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={styles.prevButton}
                >
                  {t('back')}
                </button>
              )}
              <button type="submit" className={styles.nextButton}>
                {currentStep === 1 ? t('next') : t('pay')}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
