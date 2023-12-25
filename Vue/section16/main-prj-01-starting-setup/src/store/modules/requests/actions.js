export default {
    contactCoach(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: context, coachId,
            userEmail: payload.email,
            massage: payload.massage,
        }
        context.commit('addRequest', newRequest)
    }
}