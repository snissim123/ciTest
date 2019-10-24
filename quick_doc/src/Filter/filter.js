import React from 'react';
import {Container} from "rbx";



//filter: should have insurance and specialists
const FilterMenu =(doctors)=>{

    const handleMenuItem =({doctors}) =>{
        var insurances= doctors.map(doctor=>(doctor.insurances));

        var insurances_providers = [insurances.length];
        for (var i=0; i<insurances.length;i++){
            insurances_providers[i]=insurances[i].map(insurance=>(insurance.insurance_plan.name));
        }
        var insuranceSet = new Set(insurances_providers);


        
        var specialties = doctors.map(doctor=>(doctor.specialties));
        var specialties_info = [specialties.length];
        for (var i=0; i<specialties.length; i++){
            specialties_info[i] = specialties[i].map(specialty=>(specialty.name));
        }

        var specialtiesSet = new Set(specialties_info);
    
        return [insuranceSet, specialtiesSet]
    }
    
    var res = handleMenuItem(doctors);
    console.log(res[1]);
    console.log(res[0]);
    return (
        <div>
            {res[0]}
        </div>
    )
}


export default FilterMenu;
