<script setup>
import {onMounted, ref} from "vue";
import TextInput from "@/Components/TextInput.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import RadioGroupInput from "@/Components/RadioGroupInput.vue";
import SelectInput from "@/Components/SelectInput.vue";
import InputError from "@/Components/InputError.vue";
import CheckboxGroupInput from "@/Components/CheckboxGroupInput.vue";

    const props = defineProps({
        detail: {
            type: Object,
            required: true
        }
    })
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

    const services_options = [
        {label: 'general.accouting', value: 'accouting'},
        {label: 'general.business_credit', value: 'business_credit'},
        {label: 'general.business_life_insurance', value: 'business_life_insurance'},
        {label: 'general.business_loans', value: 'business_loans'},
        {label: 'general.marketing', value: 'marketing'},
        {label: 'general.taxes', value: 'taxes'},
        {label: 'general.other', value: 'other'}
    ];

    onMounted(() => {
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

        switch (props.detail.service) {
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
                props.detail.type_of_services = JSON.parse(props.detail.type_of_services)
                break
            case 'auto_commercial_insurance':
                showPhone.value = true
                showEmail.value = true
                showAddress.value = true
                showVin.value = true
                showDriverLicence.value = true
                showInterestedIn.value = true
                showYearOfVehicle.value = false
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
    })

</script>

<template>
    <div class="grid md:grid-cols-3 md:gap-3">
        <div class="mb-3 flex flex-col">
            <InputLabel for="phone" :value="$t('form.name')" />
            {{detail.name}} {{detail.lastname}}
        </div>
        <div class="mb-3" v-if="showPhone">
            <InputLabel for="phone" :value="$t('form.phone')" />
            {{detail.phone}}
        </div>
        <div class="mb-3" v-if="showBusinessPhone">
            <InputLabel for="phone" :value="$t('form.business_phone')" />
            {{detail.businessPhone}}
        </div>
        <div class="mb-3" v-if="showEmail">
            <InputLabel for="email" :value="$t('form.email')" />
            {{detail.email}}
        </div>
        <div class="mb-3" v-if="showbusinessEmail">
            <InputLabel for="email" :value="$t('form.business_email')" />
            {{detail.businessEmail}}
        </div>
        <div class="mb-5" v-if="showCompanyName">
            <InputLabel for="company_name" :value="$t('form.company_name')" />
            {{detail.company_name}}
        </div>
        <div class="mb-5" v-if="showCity">
            <InputLabel for="city" :value="$t('form.city')" />
            {{detail.city}}
        </div>
        <div class="mb-5" v-if="showRegionStateProvince">
            <InputLabel for="regions_state_province" :value="$t('form.regions_state_province')" />
            {{detail.regions_state_province}}
        </div>
        <div class="mb-5" v-if="showLikeBeContacted">
            <InputLabel for="like_be_contacted" :value="$t('form.like_be_contacted')" />
            {{detail.like_be_contacted}}
        </div>
        <div class="mb-5" v-if="showAddress">
            <InputLabel for="address" :value="$t('form.address')" />
            {{detail.address}}
        </div>
        <div class="mb-5" v-if="showZipCode">
            <InputLabel for="zip_code" :value="$t('form.zip_code')" />
            {{detail.zip_code}}
        </div>
        <div class="mb-5" v-if="showHouseHoldIncome">
            <InputLabel for="house_hold_income" :value="$t('form.house_hold_income')" />
            {{detail.house_hold_income}}
        </div>
        <div class="mb-5" v-if="showHowManyDependents">
            <InputLabel for="how_many_dependents" :value="$t('form.how_many_dependents')" />
            {{detail.how_many_dependents}}
        </div>
        <div class="mb-5" v-if="showAgesDependents">
            <InputLabel for="ages_dependents" :value="$t('form.ages_dependents')" />
            {{detail.ages_dependents}}
        </div>
        <div class="mb-5" v-if="showHaveMedicaid">
            <InputLabel for="have_medicaid" :value="$t('form.have_medicaid')" />
            {{$t('general.' + detail.have_medicaid)}}
        </div>
        <div class="mb-5" v-if="showImmigrationStatus">
            <InputLabel for="ages_dependents" :value="$t('form.immigration_status')" />
            {{detail.immigration_status}}
        </div>
        <div class="mb-5" v-if="showApproximateCreditScore">
            <InputLabel for="approximate_credit_score" :value="$t('form.approximate_credit_score')" />
            {{detail.approximate_credit_score}}
        </div>
        <div class="mb-5" v-if="showPersonalBusinessCredit">
            <InputLabel for="personal_or_business_credit" :value="$t('form.personal_or_business_credit')" />
            {{$t('general.' + detail.personal_or_business_credit)}}
        </div>
        <div class="mb-5" v-if="showPurposeOfCredit">
            <InputLabel for="purpose_of_credit" :value="$t('form.purpose_of_credit')" />
            {{detail.purpose_of_credit}}
        </div>
        <div class="mb-5" v-if="showDateBirth">
            <InputLabel for="date_of_birth" :value="$t('form.date_of_birth')" />
            {{new Date(detail.date_of_birth).toLocaleDateString()}}
        </div>
        <div class="mb-5" v-if="showDoYouSmoke">
            <InputLabel for="do_you_smoke" :value="$t('form.do_you_smoke')" />
            {{$t('general.' + detail.do_you_smoke)}}
        </div>
        <div class="mb-5" v-if="showPurpose">
            <InputLabel for="purpose" :value="$t('form.purpose')" />
            {{detail.purpose}}
        </div>
        <div class="mb-5" v-if="showTypeOfServices">
            <InputLabel for="purpose" :value="$t('form.type_of_services')" />
            <ul>
                <li v-for="service of services_options" :key="service.value">
                    <span v-if="detail.type_of_services[service.value]">{{$t(service.label)}}</span>
                </li>
            </ul>
        </div>
        <div class="mb-5" v-if="showVin">
            <InputLabel for="vin" :value="$t('form.vin')" />
            {{detail.vin}}
        </div>
        <div class="mb-5" v-if="showDriverLicence">
            <InputLabel for="driver_licence" :value="$t('form.driver_licence')" />
            {{detail.driver_licence}}
        </div>
        <div class="mb-5" v-if="showInterestedIn">
            <InputLabel for="interested_in" :value="$t('form.interested_in')" />
            {{$t('general.' + detail.interested_in)}}
        </div>
        <div class="mb-5" v-if="showYearOfVehicle">
            <InputLabel for="year_of_vehicle" :value="$t('form.year_of_vehicle')" />
            {{detail.year_of_vehicle}}
        </div>
        <div class="mb-5" v-if="showMonthlyPremium">
            <InputLabel for="monthly_premium" :value="$t('form.monthly_premium')" />
            {{detail.monthly_premium}}
        </div>
        <div class="mb-5" v-if="showInsuranceSixMonths">
            <InputLabel for="insurance_for_six_months" :value="$t('form.insurance_for_six_months')" />
            {{detail.insurance_for_six_months}}
        </div>
        <div class="mb-5" v-if="showMovingViolations">
            <InputLabel for="moving_violations" :value="$t('form.moving_violations')" />
            {{detail.moving_violations}}
        </div>
        <div class="mb-5" v-if="showAccidents">
            <InputLabel for="accidents_five_years" :value="$t('form.accidents_five_years')" />
            {{detail.accidents_five_years}}
        </div>
        <div class="mb-5" v-if="showLoanAcountRequesting">
            <InputLabel for="loan_amount_requesting" :value="$t('form.loan_amount_requesting')" />
            {{detail.loan_amount_requesting}}
        </div>
        <div class="mb-5" v-if="showTypeOfLoan">
            <InputLabel for="type_of_loan" :value="$t('form.type_of_loan')" />
            {{$t('general.' + detail.type_of_loan)}}
        </div>
        <div class="mb-5" v-if="showVerification">
            <InputLabel for="verification" :value="$t('form.verification')" />
            {{$t('general.' + detail.verification)}}
        </div>
        <div class="mb-5" v-if="showTypeOfTaxesService">
            <InputLabel for="type_of_taxes_service" :value="$t('form.type_of_taxes_service')" />
            {{$t('general.' + detail.type_of_taxes_service)}}
        </div>
        <div class="mb-5" v-if="showRoofAge">
            <InputLabel for="roof_age" :value="$t('form.roof_age')" />
            {{detail.roof_age}}
        </div>
        <div class="mb-5" v-if="showResidenceHomeStatus">
            <InputLabel for="residence_home_status" :value="$t('form.residence_home_status')" />
            {{$t('general.' + detail.residence_home_status)}}
        </div>
        <div class="mb-5" v-if="showComments">
            <InputLabel for="zip_code" :value="$t('form.comments')" />
            {{detail.comments}}
        </div>
    </div>
</template>


<style scoped>

</style>
