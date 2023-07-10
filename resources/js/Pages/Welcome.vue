<script setup>
import {Head, Link, router, useForm} from '@inertiajs/vue3';
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import SelectInput from "@/Components/SelectInput.vue";
import {ref} from "vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import RadioGroupInput from "@/Components/RadioGroupInput.vue";
import CheckboxGroupInput from "@/Components/CheckboxGroupInput.vue";

const props = defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
    seller: {
        type: Object
    }
});

const service_options = [
    {label: 'services.health_insurance', value: 'health_insurance'},
    {label: 'services.credit_solutions', value: 'credit_solutions'},
    {label: 'services.life_insurance', value: 'life_insurance'},
    {label: 'services.business_consulting', value: 'business_consulting'},
    {label: 'services.auto_commercial_insurance', value: 'auto_commercial_insurance'},
    {label: 'services.business_credit', value: 'business_credit'},
    {label: 'services.personal_loan_low_mortgage', value: 'personal_loan_low_mortgage'},
    {label: 'services.taxes', value: 'taxes'},
    {label: 'services.home_insurance', value: 'home_insurance'},
]
const number_dependents = [
    {label: '0', value: '0'},
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
    {label: '10+', value: '10+'},
]
const medicaid = [
    {label: 'general.yes', value: 'yes'},
    {label: 'general.no', value: 'no'}
]
const credit_options = [
    {label: 'general.personal', value: 'personal'},
    {label: 'general.business', value: 'business'}
]
const purpose_options_radio = [
    {label: 'general.new_policy', value: 'new_policy'},
    {label: 'general.policy_review', value: 'policy_review'},
]
const services_options = [
    {label: 'general.accouting', value: 'accouting'},
    {label: 'general.business_credit', value: 'business_credit'},
    {label: 'general.business_life_insurance', value: 'business_life_insurance'},
    {label: 'general.business_loans', value: 'business_loans'},
    {label: 'general.marketing', value: 'marketing'},
    {label: 'general.taxes', value: 'taxes'},
    {label: 'general.other', value: 'other'}
];
const interested_in_options = [
    {label: 'general.auto', value: 'auto'},
    {label: 'general.workers_compensation', value: 'workers_compensation'},
    {label: 'general.liability_insurance', value: 'liability_insurance'},
]
const verification_options = [
    {label: 'general.income_verification', value: 'income_verification'},
    {label: 'general.no_income_verification', value: 'no_income_verification'},
]
const type_of_loan_options = [
    {label: 'general.primary_home', value: 'primary_home'},
    {label: 'general.invested_home', value: 'invested_home'},
    {label: 'general.foreign_national_home', value: 'foreign_national_home'},
    {label: 'general.line_of_credit', value: 'line_of_credit'},
    {label: 'general.personal_home', value: 'personal_home'},
]
const type_taxes_service = [
    {label: 'general.business_tax_preparation', value: 'business_tax_preparation'},
    {label: 'general.personal_tax_preparation', value: 'personal_tax_preparation'},
]
const residenceHomeStatusOptions = [
    {label: 'general.primary_home', value: 'primary_home'},
    {label: 'general.invested_home', value: 'invested_home'},
    {label: 'general.second_vacation_home', value: 'second_vacation_home'},
]
const form = useForm({
    service: '',
    name: '',
    lastname: '',
    phone: '',
    businessPhone: '',
    email: '',
    businessEmail: '',
    company_name: '',
    city: '',
    regions_state_province: '',
    like_be_contacted: '',
    address: '',
    zip_code: '',
    house_hold_income: '',
    how_many_dependents: '',
    ages_dependents: '',
    have_medicaid: '',
    immigration_status: '',
    approximate_credit_score: '',
    personal_or_business_credit: '',
    purpose_of_credit: '',
    date_of_birth: '',
    do_you_smoke: '',
    purpose: '',
    type_of_services: {
        accouting: false,
        business_credit: false,
        business_life_insurance: false,
        business_loans: false,
        marketing: false,
        taxes: false,
        other: false
    },
    vin: '',
    driver_licence: '',
    interested_in: '',
    year_of_vehicle: '',
    monthly_premium: '',
    insurance_for_six_months: '',
    moving_violations: '',
    accidents_five_years: '',
    loan_amount_requesting: '',
    type_of_loan: '',
    type_of_taxes_service: '',
    roof_age: '',
    residence_home_status: '',
    seller_id: props.seller.id,
    verification: '',
    comments: '',
    locale: localStorage.getItem('locale')
});
const updatedTypeService = (event) => {
    form.type_of_services[event.key] = event.value
}

const showPhone = ref(false)
const showBusinessPhone = ref(false)
const showEmail = ref(false)
const showbusinessEmail = ref(false)
const showCompanyName = ref(false)
const showCity = ref(false)
const showRegionStateProvince = ref(false)
const showLikeBeContacted = ref(false)
const showAddress = ref(false)
const showZipCode = ref(false)
const showComments = ref(false)
const showHouseHoldIncome = ref(false)
const showHowManyDependents = ref(false)
const showAgesDependents = ref(false)
const showHaveMedicaid = ref(false)
const showImmigrationStatus = ref(false)
const showApproximateCreditScore = ref(false)
const showPersonalBusinessCredit = ref(false)
const showPurposeOfCredit = ref(false)
const showDateBirth = ref(false)
const showDoYouSmoke = ref(false)
const showPurpose = ref(false)
const showTypeOfServices = ref(false)
const showVin = ref(false)
const showDriverLicence = ref(false)
const showInterestedIn = ref(false)
const showYearOfVehicle = ref(false)
const showMonthlyPremium = ref(false)
const showInsuranceSixMonths = ref(false)
const showMovingViolations = ref(false)
const showAccidents = ref(false)
const showLoanAcountRequesting = ref(false)
const showVerification = ref(false)
const showTypeOfLoan = ref(false)
const showTypeOfTaxesService = ref(false)
const showRoofAge = ref(false)
const showResidenceHomeStatus = ref(false)


const changeService = ($event) => {
    showPhone.value = false
    showBusinessPhone.value = false
    showEmail.value = false
    showbusinessEmail.value = false
    showCompanyName.value = false
    showCity.value = false
    showRegionStateProvince.value = false
    showLikeBeContacted.value = false
    showAddress.value = false
    showZipCode.value = false
    showComments.value = false
    showHouseHoldIncome.value = false
    showHowManyDependents.value = false
    showAgesDependents.value = false
    showHaveMedicaid.value = false
    showImmigrationStatus.value = false
    showApproximateCreditScore.value = false
    showPersonalBusinessCredit.value = false
    showPurposeOfCredit.value = false
    showDateBirth.value = false
    showDoYouSmoke.value = false
    showPurpose.value = false
    showTypeOfServices.value = false
    showVin.value = false
    showDriverLicence.value = false
    showInterestedIn.value = false
    showYearOfVehicle.value = false
    showMonthlyPremium.value = false
    showInsuranceSixMonths.value = false
    showMovingViolations.value = false
    showAccidents.value = false
    showLoanAcountRequesting.value = false
    showVerification.value = false
    showTypeOfLoan.value = false
    showTypeOfTaxesService.value = false
    showRoofAge.value = false
    showResidenceHomeStatus.value = false

    switch ($event.target.value) {
        case 'health_insurance':
            showPhone.value = true
            showEmail.value = true
            showCity.value = true
            showRegionStateProvince.value = true
            showLikeBeContacted.value = true
            showZipCode.value = true
            showComments.value = true
            showHouseHoldIncome.value = true
            showHowManyDependents.value = true
            showAgesDependents.value = true
            showHaveMedicaid.value = true
            showImmigrationStatus.value = true
            break
        case 'credit_solutions':
            showPhone.value = true
            showEmail.value = true
            showLikeBeContacted.value = true
            showApproximateCreditScore.value = true
            showPersonalBusinessCredit.value = true
            showPurposeOfCredit.value = true
            showComments.value = true
            break
        case 'life_insurance':
            showPhone.value = true
            showEmail.value = true
            showCity.value = true
            showRegionStateProvince.value = true
            showLikeBeContacted.value = true
            showComments.value = false
            showDateBirth.value = true
            showDoYouSmoke.value = true
            showPurpose.value = true
            showComments.value = true
            break
        case 'business_consulting':
            showBusinessPhone.value = true
            showbusinessEmail.value = true
            showCity.value = true
            showCompanyName.value = true
            showRegionStateProvince.value = true
            showLikeBeContacted.value = true
            showTypeOfServices.value = true
            showComments.value = true
            break
        case 'auto_commercial_insurance':
            showPhone.value = true
            showEmail.value = true
            showAddress.value = true
            showVin.value = true
            showDriverLicence.value = true
            showInterestedIn.value = true
            showYearOfVehicle.value = true
            showMonthlyPremium.value = true
            showInsuranceSixMonths.value = true
            showMovingViolations.value = true
            showAccidents.value = true
            showComments.value = true
            break
        case 'business_credit':
            showBusinessPhone.value = true
            showbusinessEmail.value = true
            showCompanyName.value = true
            showCity.value = true
            showRegionStateProvince.value = true
            showLikeBeContacted.value = true
            showLoanAcountRequesting.value = true
            showVerification.value = true
            showComments.value = true
            break
        case 'personal_loan_low_mortgage':
            showPhone.value = true
            showEmail.value = true
            showCity.value = true
            showRegionStateProvince.value = true
            showLikeBeContacted.value = true
            showComments.value = true
            showApproximateCreditScore.value = true
            showTypeOfLoan.value = true
            showVerification.value = true
            break
        case 'taxes':
            showPhone.value = true
            showEmail.value = true
            showCity.value = true
            showRegionStateProvince.value = true
            showLikeBeContacted.value = true
            showComments.value = true
            showTypeOfTaxesService.value = true
            break
        case 'home_insurance':
            showPhone.value = true
            showEmail.value = true
            showCity.value = true
            showRegionStateProvince.value = true
            showLikeBeContacted.value = true
            showComments.value = true
            showRoofAge.value = true
            showResidenceHomeStatus.value = true
            showMonthlyPremium.value = true
            showZipCode.value = true
            showAddress.value = true
            break
    }
}

const register = () => {
    // console.log(form)
    form.locale = localStorage.getItem('locale')
    router.post('/customers', form)
}
</script>

<template>
    <GuestLayout>
        <Head title="Registro" />
        <div class="">
            <div class="max-w-7xl mx-auto">
                <div class="bg-white overflow-hidden">
                    <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert" v-if="Object.keys($page.props.errors).length">
                        <span class="font-medium">Error!</span> {{$page.props.errors.error_customer_create}}
                    </div>
                    <div class="my-6">
                        <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{$t('form_page.title')}}</h2>
                        <p class="mt-5 text-sm">{{$t('form_page.paragraph')}}</p>
                    </div>
                    <div class="py-4">
                        <form @submit.prevent="register">
                            <div class="">
                                <div class="mb-5">
                                    <InputLabel for="service" :value="$t('form.select_service')" />
                                    <SelectInput id="service" class="mt-1 block w-full" v-model="form.service" :options="service_options" @change="changeService" required />
                                    <InputError class="mt-2" :message="form.errors.service" />
                                </div>
                                <template class="my-5" v-if="form.service">
                                    <div class="mb-5">
                                        <InputLabel for="name" :value="$t('form.first_name') + ' *'" />
                                        <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
                                        <InputError class="mt-2" :message="form.errors.name" />
                                    </div>
                                    <div class="mb-5">
                                        <InputLabel for="lastnamename" :value="$t('form.last_name') + ' *'" />
                                        <TextInput id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname" required autocomplete="lastname" />
                                        <InputError class="mt-2" :message="form.errors.lastname" />
                                    </div>
                                    <div class="mb-5" v-if="showPhone">
                                        <InputLabel for="phone" :value="$t('form.phone') + ' *'" />
                                        <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" :placeholder="'10 ' + $t('form.digits')" pattern="[0-9]{10}" minLength="10" maxLength="10" required autocomplete="phone" />
                                        <InputError class="mt-2" :message="form.errors.phone" />
                                    </div>
                                    <div class="mb-5" v-if="showBusinessPhone">
                                        <InputLabel for="phone" :value="$t('form.business_phone') + ' *'" />
                                        <TextInput id="businessPhone" type="text" class="mt-1 block w-full" v-model="form.businessPhone" :placeholder="'10 ' + $t('form.digits')" pattern="[0-9]{10}" minLength="10" maxLength="10" required autocomplete="phone" />
                                        <InputError class="mt-2" :message="form.errors.businessPhone" />
                                    </div>
                                    <div class="mb-5" v-if="showEmail">
                                        <InputLabel for="email" :value="$t('form.email') + ' *'" />
                                        <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="email" />
                                        <InputError class="mt-2" :message="form.errors.email" />
                                    </div>
                                    <div class="mb-5" v-if="showbusinessEmail">
                                        <InputLabel for="email" :value="$t('form.business_email') + ' *'" />
                                        <TextInput id="businessEmail" type="email" class="mt-1 block w-full" v-model="form.businessEmail" required autocomplete="email" />
                                        <InputError class="mt-2" :message="form.errors.businessEmail" />
                                    </div>
                                    <div class="mb-5" v-if="showCompanyName">
                                        <InputLabel for="company_name" :value="$t('form.company_name')" />
                                        <TextInput id="company_name" type="text" class="mt-1 block w-full" v-model="form.company_name" autocomplete="company_name" />
                                        <InputError class="mt-2" :message="form.errors.company_name" />
                                    </div>
                                    <div class="mb-5" v-if="showCity">
                                        <InputLabel for="city" :value="$t('form.city')" />
                                        <TextInput id="city" type="text" class="mt-1 block w-full" v-model="form.city" autocomplete="city" />
                                        <InputError class="mt-2" :message="form.errors.city" />
                                    </div>
                                    <div class="mb-5" v-if="showRegionStateProvince">
                                        <InputLabel for="regions_state_province" :value="$t('form.regions_state_province')" />
                                        <TextInput id="regions_state_province" type="text" class="mt-1 block w-full" v-model="form.regions_state_province" autocomplete="regions_state_province" />
                                        <InputError class="mt-2" :message="form.errors.regions_state_province" />
                                    </div>
                                    <div class="mb-5" v-if="showLikeBeContacted">
                                        <InputLabel for="like_be_contacted" :value="$t('form.like_be_contacted')" />
                                        <TextInput id="like_be_contacted" type="text" class="mt-1 block w-full" v-model="form.like_be_contacted" autocomplete="like_be_contacted" />
                                        <InputError class="mt-2" :message="form.errors.like_be_contacted" />
                                    </div>
                                    <div class="mb-5" v-if="showAddress">
                                        <InputLabel for="address" :value="$t('form.address')" />
                                        <TextInput id="address" type="text" class="mt-1 block w-full" v-model="form.address" autocomplete="address" />
                                        <InputError class="mt-2" :message="form.errors.address" />
                                    </div>
                                    <div class="mb-5" v-if="showZipCode">
                                        <InputLabel for="zip_code" :value="$t('form.zip_code')" />
                                        <TextInput id="zip_code" type="text" class="mt-1 block w-full" v-model="form.zip_code" autocomplete="zip_code" />
                                        <InputError class="mt-2" :message="form.errors.zip_code" />
                                    </div>
                                    <div class="mb-5" v-if="showHouseHoldIncome">
                                        <InputLabel for="house_hold_income" :value="$t('form.house_hold_income')" />
                                        <TextInput id="house_hold_income" type="text" class="mt-1 block w-full" v-model="form.house_hold_income" autocomplete="house_hold_income" />
                                        <InputError class="mt-2" :message="form.errors.house_hold_income" />
                                    </div>
                                    <div class="mb-5" v-if="showHowManyDependents">
                                        <InputLabel for="how_many_dependents" :value="$t('form.how_many_dependents')" />
                                        <SelectInput id="how_many_dependents" class="mt-1 block w-full" v-model="form.how_many_dependents" :options="number_dependents" />
                                        <InputError class="mt-2" :message="form.errors.how_many_dependents" />
                                    </div>
                                    <div class="mb-5" v-if="showAgesDependents">
                                        <InputLabel for="ages_dependents" :value="$t('form.ages_dependents')" />
                                        <TextInput id="ages_dependents" type="text" class="mt-1 block w-full" v-model="form.ages_dependents" autocomplete="ages_dependents" />
                                        <InputError class="mt-2" :message="form.errors.ages_dependents" />
                                    </div>
                                    <div class="mb-5" v-if="showHaveMedicaid">
                                        <InputLabel for="have_medicaid" :value="$t('form.have_medicaid')" />
                                        <SelectInput id="have_medicaid" class="mt-1 block w-full" v-model="form.have_medicaid" :options="medicaid" />
                                        <InputError class="mt-2" :message="form.errors.have_medicaid" />
                                    </div>
                                    <div class="mb-5" v-if="showImmigrationStatus">
                                        <InputLabel for="ages_dependents" :value="$t('form.immigration_status')" />
                                        <TextInput id="ages_dependents" type="text" class="mt-1 block w-full" v-model="form.immigration_status" autocomplete="immigration_status" />
                                        <InputError class="mt-2" :message="form.errors.immigration_status" />
                                    </div>
                                    <div class="mb-5" v-if="showApproximateCreditScore">
                                        <InputLabel for="approximate_credit_score" :value="$t('form.approximate_credit_score')" />
                                        <TextInput id="approximate_credit_score" type="text" class="mt-1 block w-full" v-model="form.approximate_credit_score" autocomplete="approximate_credit_score" />
                                        <InputError class="mt-2" :message="form.errors.approximate_credit_score" />
                                    </div>
                                    <div class="mb-5" v-if="showPersonalBusinessCredit">
                                        <InputLabel for="personal_or_business_credit" :value="$t('form.personal_or_business_credit')" />
                                        <SelectInput id="personal_or_business_credit" class="mt-1 block w-full" v-model="form.personal_or_business_credit" :options="credit_options" />
                                        <InputError class="mt-2" :message="form.errors.personal_or_business_credit" />
                                    </div>
                                    <div class="mb-5" v-if="showPurposeOfCredit">
                                        <InputLabel for="purpose_of_credit" :value="$t('form.purpose_of_credit')" />
                                        <TextInput id="purpose_of_credit" type="text" class="mt-1 block w-full" v-model="form.purpose_of_credit" autocomplete="purpose_of_credit" />
                                        <InputError class="mt-2" :message="form.errors.purpose_of_credit" />
                                    </div>
                                    <div class="mb-5" v-if="showDateBirth">
                                        <InputLabel for="date_of_birth" :value="$t('form.date_of_birth')" />
                                        <TextInput id="date_of_birth" type="date" class="mt-1 block w-full" v-model="form.date_of_birth" autocomplete="date_of_birth" />
                                        <InputError class="mt-2" :message="form.errors.date_of_birth" />
                                    </div>
                                    <div class="mb-5" v-if="showDoYouSmoke">
                                        <InputLabel for="do_you_smoke" :value="$t('form.do_you_smoke')" />
                                        <SelectInput id="do_you_smoke" class="mt-1 block w-full" v-model="form.do_you_smoke" :options="medicaid" />
                                        <InputError class="mt-2" :message="form.errors.have_medicaid" />
                                    </div>
                                    <div class="mb-5" v-if="showPurpose">
                                        <InputLabel for="purpose" :value="$t('form.purpose')" />
                                        <RadioGroupInput :options="purpose_options_radio" group-name="life_insurance_purpose" @update-radio="form.purpose = $event" />
                                    </div>
                                    <div class="mb-5" v-if="showTypeOfServices">
                                        <InputLabel for="purpose" :value="$t('form.type_of_services')" />
                                        <CheckboxGroupInput :options="services_options" @update-check="updatedTypeService" />
                                    </div>
                                    <div class="mb-5" v-if="showVin">
                                        <InputLabel for="vin" :value="$t('form.vin')" />
                                        <TextInput id="vin" type="text" class="mt-1 block w-full" v-model="form.vin" autocomplete="vin" />
                                        <InputError class="mt-2" :message="form.errors.vin" />
                                    </div>
                                    <div class="mb-5" v-if="showDriverLicence">
                                        <InputLabel for="driver_licence" :value="$t('form.driver_licence')" />
                                        <TextInput id="driver_licence" type="text" class="mt-1 block w-full" v-model="form.driver_licence" autocomplete="driver_licence" />
                                        <InputError class="mt-2" :message="form.errors.driver_licence" />
                                    </div>
                                    <div class="mb-5" v-if="showInterestedIn">
                                        <InputLabel for="interested_in" :value="$t('form.interested_in')" />
                                        <SelectInput id="interested_in" class="mt-1 block w-full" v-model="form.interested_in" :options="interested_in_options" />
                                        <InputError class="mt-2" :message="form.errors.interested_in" />
                                    </div>
                                    <div class="mb-5" v-if="showYearOfVehicle">
                                        <InputLabel for="year_of_vehicle" :value="$t('form.year_of_vehicle')" />
                                        <TextInput id="year_of_vehicle" type="date" class="mt-1 block w-full" v-model="form.year_of_vehicle" autocomplete="year_of_vehicle" />
                                        <InputError class="mt-2" :message="form.errors.year_of_vehicle" />
                                    </div>
                                    <div class="mb-5" v-if="showMonthlyPremium">
                                        <InputLabel for="monthly_premium" :value="$t('form.monthly_premium')" />
                                        <TextInput id="monthly_premium" type="text" class="mt-1 block w-full" v-model="form.monthly_premium" autocomplete="monthly_premium" />
                                        <InputError class="mt-2" :message="form.errors.monthly_premium" />
                                    </div>
                                    <div class="mb-5" v-if="showInsuranceSixMonths">
                                        <InputLabel for="insurance_for_six_months" :value="$t('form.insurance_for_six_months')" />
                                        <TextInput id="insurance_for_six_months" type="text" class="mt-1 block w-full" v-model="form.insurance_for_six_months" autocomplete="minsurance_for_six_months" />
                                        <InputError class="mt-2" :message="form.errors.insurance_for_six_months" />
                                    </div>
                                    <div class="mb-5" v-if="showMovingViolations">
                                        <InputLabel for="moving_violations" :value="$t('form.moving_violations')" />
                                        <TextInput id="moving_violations" type="text" class="mt-1 block w-full" v-model="form.moving_violations" autocomplete="moving_violations" />
                                        <InputError class="mt-2" :message="form.errors.moving_violations" />
                                    </div>
                                    <div class="mb-5" v-if="showAccidents">
                                        <InputLabel for="accidents_five_years" :value="$t('form.accidents_five_years')" />
                                        <TextInput id="accidents_five_years" type="text" class="mt-1 block w-full" v-model="form.accidents_five_years" autocomplete="accidents_five_years" />
                                        <InputError class="mt-2" :message="form.errors.accidents_five_years" />
                                    </div>
                                    <div class="mb-5" v-if="showLoanAcountRequesting">
                                        <InputLabel for="loan_amount_requesting" :value="$t('form.loan_amount_requesting')" />
                                        <TextInput id="loan_amount_requesting" type="text" class="mt-1 block w-full" v-model="form.loan_amount_requesting" autocomplete="loan_amount_requesting" />
                                        <InputError class="mt-2" :message="form.errors.loan_amount_requesting" />
                                    </div>
                                    <div class="mb-5" v-if="showTypeOfLoan">
                                        <InputLabel for="type_of_loan" :value="$t('form.type_of_loan')" />
                                        <SelectInput id="type_of_loan" class="mt-1 block w-full" v-model="form.type_of_loan" :options="type_of_loan_options" />
                                        <InputError class="mt-2" :message="form.errors.type_of_loan" />
                                    </div>
                                    <div class="mb-5" v-if="showVerification">
                                        <InputLabel for="purpose" :value="$t('form.verification')" />
                                        <RadioGroupInput :options="verification_options" group-name="life_insurance_purpose" @update-radio="form.verification = $event" optionchecked="no_income_verification" />
                                    </div>
                                    <div class="mb-5" v-if="showTypeOfTaxesService">
                                        <InputLabel for="type_of_taxes_service" :value="$t('form.type_of_taxes_service')" />
                                        <RadioGroupInput :options="type_taxes_service" group-name="taxes_types_services" @update-radio="form.type_of_taxes_service = $event" />
                                    </div>
                                    <div class="mb-5" v-if="showRoofAge">
                                        <InputLabel for="roof_age" :value="$t('form.roof_age')" />
                                        <TextInput id="roof_age" type="text" class="mt-1 block w-full" v-model="form.roof_age" autocomplete="roof_age" />
                                        <InputError class="mt-2" :message="form.errors.roof_age" />
                                    </div>
                                    <div class="mb-5" v-if="showResidenceHomeStatus">
                                        <InputLabel for="residence_home_status" :value="$t('form.residence_home_status')" />
                                        <SelectInput id="resident_home_status" class="mt-1 block w-full" v-model="form.residence_home_status" :options="residenceHomeStatusOptions" />
                                        <InputError class="mt-2" :message="form.errors.residence_home_status" />
                                    </div>


                                    <div class="mb-5" v-if="showComments">
                                        <InputLabel for="zip_code" :value="$t('form.comments')" />
                                        <TextAreaInput id="comments" type="text" class="mt-1 block w-full" v-model="form.comments" autocomplete="zip_code" />
                                        <InputError class="mt-2" :message="form.errors.comments" />
                                    </div>
                                    <div class="flex items-center justify-start mt-4">
                                        <PrimaryButton class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                            {{ $t('form.save_button') }}
                                        </PrimaryButton>
                                    </div>
                                </template>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>

<style>
</style>
