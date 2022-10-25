import { ShowMeController } from './showme-controller'
import { ShowMeUseCase } from './showme-use-case'

const showMeUseCase = new ShowMeUseCase()

const showmeController = new ShowMeController(
  showMeUseCase
)

export {showMeUseCase, showmeController}