export default{
    registerCoach(context,data){
        debugger
        const coachData = {
            id:context.rootGetters,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate:data.rate,
            areas:data.areas
        };
        context.commit('registerCoach',coachData);
    }
}