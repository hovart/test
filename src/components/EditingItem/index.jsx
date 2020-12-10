import React, { useState } from 'react';
import cn from 'classnames';

import PropTypes from 'prop-types';

import s from './styles.module.scss';
import { Col, Row } from 'react-bootstrap';
import Modal from '../UiKit/Modal';
import NumberInput from '../UiKit/NumberInput';
import TextInput from '../UiKit/TextInput';
import CheckBox from '../UiKit/CheckBox';
import Select from '../UiKit/Select';
import TariffGrid from '../UiKit/TariffGrid';
import Button from '../UiKit/Button';

const tariffOptions = [
  { id: 1, label: 'Tariff-1' },
  { id: 2, label: 'Tariff-2' },
  { id: 3, label: 'Tariff-3' },
  { id: 4, label: 'Tariff-4' },
  { id: 5, label: 'Tariff-5' },
];

function EditingItem({ data, removeData }) {
  const [piecesValue, setPiecesValue] = useState(0);
  const [priceDay, setPriceDay] = useState('');
  const [kmsDay, setKmsDay] = useState('');
  const [priceMonth, setPriceMonth] = useState('');
  const [kmsMonth, setKmsMonth] = useState('');
  const [kmsExtraPrice, setKmsExtraPrice] = useState('');
  const [unlimitedKm, setUnlimitedKm] = useState(false);

  const [tariffItems, setTariffItems] = useState([]);

  const [selectedTariff, setSelectedTariff] = useState(null);

  const [driversMinAge1, setDriversMinAge1] = useState('');
  const [deposit1, setDeposit1] = useState('');
  const [driversMinAge2, setDriversMinAge2] = useState('');
  const [deposit2, setDeposit2] = useState('');

  const [customDriversAge, setCustomDriversAge] = useState(false);
  const [premiumInsurance, setPremiumInsurance] = useState(false);
  const [errorText, setErrorText] = useState('');

  const calculate = () => {
    const valid = priceDay > 0 && priceMonth > 0;

    if (valid) {
      setErrorText('');
      const daily = parseInt(priceDay, 10);
      const dailyKm = parseInt(kmsDay, 10);
      const num = (priceMonth - priceDay) / 29;
      const kms = (kmsMonth - kmsDay) / 29;
      const days = [];
      for (let i = 1; i <= 30; i++) {
        days.push({
          days: i,
          price: i === 1 ? daily : daily + num * (i - 1),
          km: i === 1 ? dailyKm : dailyKm + kms * (i - 1),
        });
      }

      setTariffItems([...days]);
    } else {
      setTariffItems([]);
      setErrorText('Please Fill in');
    }
  };

  return (
    <Modal open={!!data} title={`${data?.name} editing`} onClose={removeData}>
      <>
        {!!data && (
          <>
            <div className={s.bikesModal}>
              <div className={s.bikeItem}>
                <div className={s.bikeItemLeft}>
                  <span className={s.bikeItemImage}>
                    <img src={data.image} alt={data.name} />
                  </span>
                  <span className={s.bikeItemName}>
                    <span>{data.name}</span>
                  </span>
                </div>
                <div className={s.bikeItemRight}>
                  <NumberInput
                    value={piecesValue}
                    onChange={setPiecesValue}
                    label="pieces"
                    min={0}
                    max={data.maxPieces}
                  />
                </div>
              </div>
            </div>
            <div className={s.monthPricing}>
              <span className={s.title}>month pricing</span>
              <Row>
                <Col xs={6}>
                  <span className={s.dayNumbers}>One Day</span>
                  <Row>
                    <Col xs={6}>
                      <TextInput
                        value={priceDay}
                        type="number"
                        min={1}
                        onChange={setPriceDay}
                        additionalSymbol={'€'}
                        label="Price"
                      />
                    </Col>
                    <Col xs={6}>
                      <TextInput
                        value={kmsDay}
                        type="number"
                        min={1}
                        onChange={setKmsDay}
                        additionalSymbol={'KM'}
                        label="KM’s included"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={6}>
                  <span className={s.dayNumbers}>30 Days</span>
                  <Row>
                    <Col xs={6}>
                      <TextInput
                        value={priceMonth}
                        type="number"
                        min={1}
                        onChange={setPriceMonth}
                        additionalSymbol={'€'}
                        label="Price"
                      />
                    </Col>
                    <Col xs={6}>
                      <TextInput
                        value={kmsMonth}
                        type="number"
                        min={1}
                        onChange={setKmsMonth}
                        additionalSymbol={'KM'}
                        label="KM’s included"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className={s.calculate}>
              <Row>
                <Col xs={6}>
                  <Row>
                    <Col xs={6}>
                      <TextInput
                        value={kmsExtraPrice}
                        type="number"
                        onChange={setKmsExtraPrice}
                        additionalSymbol={'€'}
                        label="KM’s extra price"
                      />
                    </Col>
                    <Col xs={6}>
                      <div className="my-2">
                        <CheckBox
                          value={unlimitedKm}
                          name="unlimited"
                          onChange={setUnlimitedKm}
                          label="Unlimited kilometres"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6}>
                  <Button
                    h="35px"
                    bgcolor="#fff"
                    borderSize="2px"
                    color="#1E88E5"
                    onClick={calculate}
                  >
                    <div style={{ display: 'flex' }}>
                      Calculate month pricing
                      <div
                        className={s.info}
                        onClick={e => e.stopPropagation()}
                      />
                    </div>
                  </Button>
                </Col>
              </Row>
            </div>
            {errorText && <div className={s.errorText}>{errorText}</div>}
            <TariffGrid items={tariffItems} />
            <div className={s.tariffAdding}>
              <Row>
                <Col xs={6}>
                  <span className={cn(s.title, 'my-2')}>Tariff Adding</span>
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col xs={9}>
                      <Select
                        name="select"
                        value={selectedTariff}
                        options={tariffOptions}
                        onChange={setSelectedTariff}
                        placeholder="Choose tariff"
                        withPlaceholderOption
                      />
                    </Col>
                    <Col xs={3}>
                      <Button
                        h="35px"
                        color="#1E88E5"
                        bgcolor="#fff"
                        onClick={() =>
                          alert(
                            selectedTariff
                              ? selectedTariff.label
                              : 'not selected',
                          )
                        }
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className={s.insuranceAndAge}>
              <span className={s.title}>Insurance and drivers age</span>
              <Row>
                <Col xs={3}>
                  <TextInput
                    value={driversMinAge1}
                    onChange={setDriversMinAge1}
                    additionalSymbol={'y.o.'}
                    label="Drivers min age"
                  />
                </Col>
                <Col xs={3}>
                  <TextInput
                    value={deposit1}
                    onChange={setDeposit1}
                    additionalSymbol={'€'}
                    label="Deposit"
                  />
                </Col>
                <Col xs={3}>
                  <TextInput
                    value={driversMinAge2}
                    onChange={setDriversMinAge2}
                    additionalSymbol={'y.o.'}
                    label="Drivers min age"
                  />
                </Col>
                <Col xs={3}>
                  <TextInput
                    value={deposit2}
                    onChange={setDeposit2}
                    additionalSymbol={'€'}
                    label="Deposit"
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col xs={6}>
                  <CheckBox
                    value={customDriversAge}
                    name="custom_drivers_age"
                    onChange={setCustomDriversAge}
                    label="Custom drivers age"
                  />
                </Col>
                <Col xs={6}>
                  <CheckBox
                    value={premiumInsurance}
                    name="premium_insurance"
                    onChange={setPremiumInsurance}
                    label="Premium Insurance"
                  />
                </Col>
              </Row>
            </div>
            <div className={s.buttons}>
              <Row>
                <Col xs={6} className="p-2">
                  <Button h="45px" onClick={() => alert('Saved')}>
                    Save
                  </Button>
                </Col>
                <Col xs={6} className="p-2">
                  <Button
                    h="45px"
                    bgcolor="#fff"
                    color="#000"
                    borderColor="#d0d0d0"
                    onClick={() => removeData()}
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </div>
          </>
        )}
      </>
    </Modal>
  );
}

EditingItem.propTypes = {
  data: {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    maxPieces: PropTypes.number.isRequired,
  },
  removeData: PropTypes.func.isRequired,
};

export default EditingItem;
